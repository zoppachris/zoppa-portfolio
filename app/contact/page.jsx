"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+62) 859 2626 0532" },
  { icon: <FaEnvelope />, title: "Email", description: "zoppa.c11@gmail.com" },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description:
      "KP. Kihapit Barat No.49 RT/RW 04/09, Kelurahan Leuwigajah, Kecamatan Cimahi Selatan, Kota Cimahi 40532, Indonesia",
  },
];

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a14fcbfb-b936-473d-9362-8a3805c7b3e4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setLoading(false);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-secondary rounded-xl"
              onSubmit={onSubmit}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'd love to hear from you! If you have any question, comment,
                and feedback, please use the form below.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Enter your message"
                required
              />
              {/* btn */}
              <Button className="max-w-40" type="submit" disabled={loading}>
                Send Message
              </Button>
              <p className="mt-4 text-white/60">{result}</p>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
