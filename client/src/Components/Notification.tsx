import { notifications } from '@mantine/notifications';

export function NotifiationSucess(body: string) {
  notifications.show({
    title: 'Success!',
    message: body,
    styles: theme => ({
      root: {
        backgroundColor: theme.colors.blue[6],
        borderColor: theme.colors.blue[6],

        '&::before': { backgroundColor: theme.white },
      },

      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        '&:hover': { backgroundColor: theme.colors.blue[7] },
      },
    }),
  });
}

export function NotifiationError(body: string) {
  notifications.show({
    title: 'Oops!',
    message: body,
    styles: theme => ({
      root: {
        backgroundColor: theme.colors.red[6],
        borderColor: theme.colors.red[6],

        '&::before': { backgroundColor: theme.white },
      },

      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        '&:hover': { backgroundColor: theme.colors.red[7] },
      },
    }),
  });
}
