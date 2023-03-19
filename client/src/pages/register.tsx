import APIService from "@/api";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
  SimpleGrid,
  Stack,
} from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { useForm, zodResolver } from "@mantine/form";
import { registerSchema } from "@/schema/authSchema";
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)",
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: rem(900),
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function Login() {
  const { classes } = useStyles();
  // const router = useRouter()
  const form = useForm({
    validate: zodResolver(registerSchema),
  });

  const registerMutation = useMutation({
    mutationFn: APIService.register,

    onSuccess(data, variables, context) {
      localStorage.setItem("token", data.token);
      // router.push('/')
      location.assign('/')
    },

    onError(error, variables, context) {
      console.error(error);
      form.setErrors({
        email: 'Email already registered'
      })
    },
  });

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome New Cool User 😎!
        </Title>

        <form
          onSubmit={form.onSubmit((val: any) => registerMutation.mutate(val))}
        >
          <Stack>
            <SimpleGrid cols={2} pb="sm">
              <TextInput
                label="Firs Name"
                placeholder="Human"
                {...form.getInputProps("firstName")}
              />
              <TextInput
                label="Last Name"
                placeholder="Name"
                {...form.getInputProps("lastName")}
              />
            </SimpleGrid>

            <TextInput
              label="Username"
              placeholder="@username"
              {...form.getInputProps("username")}
            />

            <TextInput
              label="Email address"
              placeholder="hello@gmail.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              {...form.getInputProps("password")}
            />

            <Button
              loading={registerMutation.isLoading}
              fullWidth
              mt="xl"
              type="submit"
            >
              Sign Up
            </Button>
          </Stack>
        </form>

        <Text ta="center" mt="md">
          Already have an account?{" "}
          <Anchor<"a"> href="login" weight={700}>
            Login
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
