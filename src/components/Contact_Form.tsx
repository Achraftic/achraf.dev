'use client';
import { Button } from './ui/button';
import { BiSend } from 'react-icons/bi';
import emailjs from 'emailjs-com';
import { toast } from "sonner"

export default function ContactForm() {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission behavior

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                e.currentTarget,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                toast.success('Message sent successfully!', {
                    duration: 3000,
                    action: {
                        label: "Undo",
                        onClick: () => console.log("Undo"),
                    },
                    className: "text-green-600 border-green-400 border-opacity-50 bg-zinc-100 ",

                    actionButtonStyle: {
                        backgroundColor: '#16a34a',
                        color: 'white',
                    }

                })

            },
                (error) => {
                    console.log(error.text);
                    toast.error('Message failed to send!', {
                        duration: 4000,
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                        className: "text-red-600 border-red-400 border-opacity-50 bg-zinc-100 ",

                        actionButtonStyle: {
                            backgroundColor: '#e11d40',
                            color: 'white',
                        }

                    })
                }
            );
    };

    return (
        <form
            onSubmit={sendEmail}
            className="flex flex-col gap-5 w-full"
        >
            {/* Full Name Field */}
            <div className="flex flex-col gap-2 w-full">
                <label
                    className="font font-semibold text-zinc-800 dark:text-zinc-100"
                    htmlFor="name"
                >
                    Full Name
                </label>
                <input
                    type="text"
                    name="name"
                    className="p-2.5 bg-transparent text-sm border contact-style focus:outline-primary outline-none focus:border-none rounded-md text-zinc-800 dark:text-zinc-100"
                    placeholder="John Doe"
                    required
                />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2 w-full">
                <label
                    className="font font-semibold text-zinc-800 dark:text-zinc-100"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    className="p-2.5 bg-transparent text-sm border contact-style focus:outline-primary outline-none focus:border-none rounded-md text-zinc-800 dark:text-zinc-100"
                    placeholder="johndoe@example.com"
                    required
                />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2 w-full">
                <label
                    className="font font-semibold text-zinc-800 dark:text-zinc-100"
                    htmlFor="message"
                >
                    Message
                </label>
                <textarea
                    name="message"
                    className="p-2.5 bg-transparent text-sm border contact-style focus:outline-primary outline-none focus:border-none rounded-md text-zinc-800 dark:text-zinc-100 resize-none"
                    cols={30}
                    rows={10}
                    placeholder="Write your message here..."
                    required
                ></textarea>
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                variant="primary"
                className="w-max self-end"
            >
                <BiSend /> Send
            </Button>
        </form>
    );
}
