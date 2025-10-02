"use client";
import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { InputBox } from "../Components/Feedback/FeedBack";
import { cn } from "../Utils/Utilities";
// import {
//   IconBrandGithub,
//   IconBrandGoogle,
//   IconBrandOnlyfans,
// } from "@tabler/icons-react";
import { TextAreaBox } from "../Components/Feedback/Textarea";

export function FeedBackForm(){
  const [firstName, setfirstName] = useState<string>("");
  const [secondName, setsecondName] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [improve, setImprove] = useState<string>("");

    const handleFirst = (e : React.ChangeEvent<HTMLInputElement>) => {
         setfirstName(e.target.value)
    }

    const handleLast = (e : React.ChangeEvent<HTMLFormElement>) => {
         setsecondName(e.target.value)
    }

    const handleMail = (e : React.ChangeEvent<HTMLFormElement>) => {
         setemail(e.target.value)
    }

    const handleFeedBack = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
         setFeedback(e.target.value)
    }

    const handleImprove = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
         setImprove(e.target.value)
    }


  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(firstName, secondName, email, feedback, improve);
    
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-white">
        Thank you for visiting my portfolio
      </h2>
      <p className="mt-2 max-w-sm text-sm text-gray-300">
        I appreciate your time and feedback. Your thoughts help me improve and
        grow!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 text-white">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <InputBox id="firstname" placeholder="Eg. Asad" type="text" onChange={handleFirst} value={firstName}/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <InputBox
              id="lastname"
              placeholder="Eg. Hussain"
              type="text"
              onChange={handleLast}
              value={secondName}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4 text-white">
          <Label htmlFor="email">Email Address</Label>
          <InputBox
            id="email"
            placeholder="aamibhattbokkina@gmail.com"
            type="email"
            onChange={handleMail}
            value={email}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="feedback" className="text-gray-300">
            Feedback
          </Label>
          <TextAreaBox
            id="feedback"
            placeholder="Write your feedback here..."
            rows={5}
            className="bg-black text-white placeholder-gray-400"
            onChange={handleFeedBack}
            value={feedback}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Improvements" className="text-gray-300">
            Improvements
          </Label>
          <TextAreaBox
            id="improvement"
            placeholder="Write what you think need to be improved here..."
            rows={5}
            className="bg-black text-white placeholder-gray-400"
            onChange={handleImprove}
            value={improve}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          onClick={handleSubmit}
        >
          Sent Feedback &rarr;
          <BottomGradient />
        </button>

        {/* <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div> */}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
