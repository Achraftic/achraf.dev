import { BsTelephone } from "react-icons/bs";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import SectionLayout from "./layout/SectionLayout";
import AnimatedLayout from "./AnimatedLayout";
import ContactForm from "./Contact_Form";



const Contact = () => {
    return (
        <AnimatedLayout id="Contact" label="Contact">
            <SectionLayout title="Contact" heading="Get in touch with me" description="Want to chat? Simply drop me a direct message on WhatsApp or use the form below with a clear question, and I'll get back to you as soon as I can.">
                <div className="flex  max-md:flex-wrap gap-5 ">
                    <div className="flex flex-col gap-5  w-full">
                        <ul className="text-zinc-800 *:cursor-pointer  dark:text-zinc-100  flex md:w-96 flex-wrap gap-3">
                            <li className="flex flex-col justify-center grow items-center gap-2 lg:w-32  contact-style text-sm border p-5 rounded-md transition duration-300 hover:bg-primary     hover:text-zinc-100">
                                <CiLocationOn className="text-2xl" />
                                <span className="w-max text-center">Marrakech, Massira 3</span>
                                <span className="tooltip text-xs opacity-70    mt-1">
                                    Location
                                </span>
                            </li>
                            <li className="flex flex-col justify-center items-center grow gap-2 lg:w-32  contact-style text-sm border p-5 rounded-md transition duration-300 hover:bg-primary  hover:text-zinc-100">
                                <BsTelephone className="text-2xl" />
                                <span className="w-max text-center">0771054446</span>
                                <span className="tooltip text-xs opacity-70 mt-1">Phone</span>
                            </li>
                            <li className="flex flex-col justify-center items-center grow gap-2 lg:w-32  contact-style text-sm border p-5 rounded-md transition duration-300 hover:bg-primary  hover:text-zinc-100">
                                <CiMail className="text-2xl" />
                                <span className="w-max text-center">
                                    achraftichirra3@gmail.com
                                </span>
                                <span className="tooltip text-xs opacity-70 mt-1">Email</span>
                            </li>
                            <li className="flex flex-col justify-center items-center grow gap-2 lg:w-32  contact-style text-sm border p-5 rounded-md transition duration-300 hover:bg-primary  hover:text-zinc-100">
                                <FaLinkedin className="text-2xl" />
                                <span className="w-max text-center">LinkedIn Profile</span>
                                <span className="tooltip text-xs opacity-70 mt-1">
                                    <a
                                        href="https://www.linkedin.com/in/your-profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Profile
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                  <ContactForm />
                </div>
            </SectionLayout>
        </AnimatedLayout>
    );
};

export default Contact;
