import type { APIRoute } from "astro";
import { object, string } from "yup";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  // Validate the data - you'll probably want to do more than this
  const contactFormSchema = object({
    name: string().min(2, "too short").required("We only accept named users"),
    email: string().required().email(),
    message: string().required(),
  });
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
  try {
    await contactFormSchema.validate(
      { name, email, message },
      { abortEarly: false }
    );
    const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSetiqLPp4LqU2jS8OI6AhfpxHfpXczgurbkDIOLSBdpgE4KJw/formResponse?usp=pp_url&entry.2005620554=${name}&entry.1544096695=${email}&entry.839337160=${message}&submit=Submit`;

    await fetch(prefilledLink);
  } catch (error) {
    console.log({ error });
  }

  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
