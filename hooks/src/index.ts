function formatMessage(message: any) {
  return message.id.toLowerCase();
}

export const createIntl = () => ({
  formatMessage,
});
