"use client";
import Image from "next/image";
import Link from "next/link";
import { Props } from "next/script";
import React, { PropsWithChildren } from "react";

const TwitterHandle: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-blue-500">{children}</span>;
};

const Author: React.FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => (
  <Link target="_blank" rel="noopener noreferrer" href={href} className="duration-150 text-zinc-200 hover:text-zinc-50">
    {children}
  </Link>
);

const Title: React.FC<PropsWithChildren<{ href: string }>> = ({ children, href }) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="text-sm duration-150 text-zinc-500 hover:text-zinc-300"
  >
    {children}
  </Link>
);

export const Testimonials = () => {
  const posts: {
    content: React.ReactNode;
    link: string;
    author: {
      name: React.ReactNode;
      title?: React.ReactNode;
      image: string;
    };
  }[] = [
    {
      content: (
        <div>
         
          <p>
          "Evaluating LLMs is a minefield". 

          </p>
          <br /> 
          <p>Current ways of evaluating chatbots/LLMs don't work well, especially for questions about societal impact.
          </p>
          <br />
          <p> There are no quick fixes. More research is needed. </p>
        </div>
      ),
      link: "https://twitter.com/random_walker/status/1709583031001124889",
      author: {
        name: <Author href="https://twitter.com/random_walker">Arvind Narayanan</Author>,
        title: <Title href="https://t.co/px6fpS9QFq">
      Princeton CS prof. Director @PrincetonCITP.</Title>,
        image: "https://pbs.twimg.com/profile_images/1650881612756942850/bZYjMyFU_400x400.jpg",
      },
    },
    {
      content: (
        <div>
          <p>Open LLMs need to get organized and co-ordinated about sharing human feedback. It's the weakest link with Open LLMs right now.</p>
          <ul>
            <li>
            They don't have 100m+ people giving feedback like in the case of  <TwitterHandle>@OpenAI/Anthropic/Bard.
             </TwitterHandle>
            </li>
            Dataset creation is one of the highest impact but least prestigious activities in machine learning research. 
          </ul> 
        </div>
      ),
      link: "https://twitter.com/soumithchintala/status/1713698431338754393",
      author: {
        name: <Author href="https://twitter.com/soumithchintala">Soumith Chintala</Author>,
        title: <Title href="https://t.co/UvSnXZxGCO">
        Cofounded and lead @PyTorch  at Meta.</Title>, 
        image: "https://pbs.twimg.com/profile_images/959995586689691648/DAFep10r_400x400.jpg",
      },
    },
    {
      content: (
        <div>
          <p> 
            Let's face it, most safety issues apply to all AI, not just open-source. Even worse, APIs and low-code/no-code is easier to use for 1,000x more people which multiplies the number of potential bad actors & risk exponentially IMO. Let's all work together on these risks instead of blaming the other.
 
          </p>
        </div>
      ),
      link: "https://twitter.com/ClementDelangue/status/1709939218812973258",
      author: {
        name: <Author href="https://twitter.com/DesignSiddharth">@ClementDelangue</Author>,
        image: "https://pbs.twimg.com/profile_images/1100512198139498497/utHSJ4st_400x400.png",
      },
    },
  ];

  return (
    <section className="container mx-auto">
      <ul role="list" className="grid max-w-2xl grid-cols-1 gap-16 mx-auto sm:gap-8 lg:max-w-none lg:grid-cols-3">
        {posts.map((post, i) => (
          <div
            key={i}
            className="flex flex-col justify-between duration-150 border rounded border-zinc-500/30 hover:border-zinc-300/30 hover:bg-zinc-900/30 group"
          >
            <Link href={post.link} className="whitespace-pre-line text text-zinc-500 p-6">
              {post.content}
            </Link>
            <div className="relative flex items-start justify-between p-6 duration-150 border-t bg-zinc-900/40 border-zinc-500/30 group-hover:border-zinc-300/30">
              <div>
                <div className="text-base font-display text-zinc-200">{post.author.name}</div>
                <div className="mt-1 text-sm text-zinc-500">{post.author.title}</div>
              </div>
              <div className="overflow-hidden rounded-full bg-zinc-50">
                <Image className="object-cover h-14 w-14" src={post.author.image} alt="" width={56} height={56} />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};
