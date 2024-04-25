const createEmbed = (formData) => {
  const embed = {
    title: ':envelope:  New Message Received!',
    description: '[Status](https://status.wolmer.me/) | Connection closed',
    fields: [
      {
        name: 'Name',
        value: formData.name,
        inline: true,
      },
      {
        name: 'Email',
        value: formData.email,
        inline: false,
      },
      {
        name: 'X Username',
        value: formData.x,
        inline: true,
      },
      {
        name: 'Message',
        value: formData.message,
      },
    ],
    footer: {
      text: 'sent via iaconlabs.com',
    },
    timestamp: new Date().toISOString(),
  };

  return embed;
};

export default createEmbed;
