import APIService from "@/api";
import { loginSchema } from "@/schema/authSchema";
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
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";

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

  const form = useForm({
    validate: zodResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: APIService.login,

    onSuccess(data, variables, context) {
      localStorage.setItem("token", data.token);
      // router.push('/')
      location.assign("/");
    },

    onError(error, variables, context) {
      console.error(error);
      form.setErrors({
        email: "Invalid Email Password comination",
        password: "Invalid Email Password comination",
      });
    },
  });

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcom back to AMU Tweets!
        </Title>

        <form onSubmit={form.onSubmit((val) => loginMutation.mutate(val))}>
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

          <Button fullWidth mt="xl" type="submit" loading={loginMutation.isLoading}>
            Login
          </Button>
        </form>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{" "}
          <Anchor component={Link} href="/register" weight={700}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
