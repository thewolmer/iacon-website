'use client;';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendWebhook } from '@/lib/discord';
import createEmbed from '@/lib/discord/EmbedBuilder';
import { cn } from '@/lib/utils';

interface Props {
  className?: React.ComponentProps<'form'>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactForm = ({ className, setOpen }: Props) => {
  const formSchema = z.object({
    name: z.string().min(3, 'Invalid Name').max(50, 'Name must be between 2 and 50 characters'),
    email: z.string().email('Invalid Email'),
    x: z.string().min(2, 'Invalid username').max(50),
    message: z
      .string()
      .min(2, 'Message must be between 2 and 2000 characters')
      .max(2000, 'Message must be between 2 and 2000 characters'),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      x: '',
      message: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const loadingToast = await toast.loading('Sending message...');
    const embed = await createEmbed(values);
    const res = await sendWebhook(embed);
    if (res === 200) {
      setOpen(false);
      toast.success('Your message was sent successfully!', {
        id: loadingToast,
        description: 'We will reach back to you soon!',
      });
    } else {
      toast.error(`Failed to send Message, Status: ${res}`, {
        id: loadingToast,
        description: 'Please try again after some time.',
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('space-y-8', className)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="x"
          render={({ field }) => (
            <FormItem>
              <FormLabel>X username</FormLabel>
              <FormControl>
                <Input placeholder="@iaconlabs" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type Your Message here!" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full rounded" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
