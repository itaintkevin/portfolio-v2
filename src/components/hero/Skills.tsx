export const next = require("../../../public/assets/skills/next.png");
export const typescript = require("../../../public/assets/skills/typescript.png");
export const redux = require("../../../public/assets/skills/redux.png");
export const tailwind = require("../../../public/assets/skills/tailwind.png");
export const material = require("../../../public/assets/skills/material.png");
export const figma = require("../../../public/assets/skills/figma.png");
export const nodejs = require("../../../public/assets/skills/nodejs.png");
export const express = require("../../../public/assets/skills/express.png");
export const query = require("../../../public/assets/skills/query.png");
export const mongo = require("../../../public/assets/skills/mongo.png");
export const firebase = require("../../../public/assets/skills/firebase.png");
export const sanity = require("../../../public/assets/skills/sanity.png");
export const solidity = require("../../../public/assets/skills/solidity.png");
export const hardhat = require("../../../public/assets/skills/hardhat.png");
export const truffle = require("../../../public/assets/skills/truffle.png");
export const ethers = require("../../../public/assets/skills/ethers.png");
export const web3 = require("../../../public/assets/skills/web3.png");
export const ipfs = require("../../../public/assets/skills/ipfs.png")

import Image from 'next/image'

export default function Skills() {
  return (
    <>
    <div id="skills" className='pt-16 2xl:mx-10'>
        <h2 className='text-2xl font-semibold text-center underline underline-offset-3 decoration-accent-1 w-full mt-2 mb-5 animate-fadeDown'>Skills</h2>
        <div className="flex flex-wrap justify-center mx-auto">
            {skills.map((skill, index) => ( 
                <div key={index} className="group relative inline-block border dark:border-2 border-primary/40 dark:border-secondary/20 bg-primary/10 transition ease-in-out duration:300 hover:-translate-y-1 hover:transition hover:ease-in-out hover:duration-300 rounded-lg animate-fadeUp p-2 m-2 h-max w-max">
                    <Image src={skill.src} alt={skill.tag} width={40}/>
                    <span className="absolute hidden group-hover:flex -left-[22px] -top-2 -translate-y-full w-[100px] flex justify-center py-1 bg-[#3B3B3B] rounded-md text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-[#3B3B3B]">
                        {skill.tag}
                    </span>
                </div>  
            ))}
        </div>
    </div>
    </>
  )
}

const skills = [
    {
        src: next,
        tag: "Next.js"
    },
    {
        src: typescript,
        tag: "TypeScript"
    },
    {
        src: redux,
        tag: "Redux"
    },
    {
        src: tailwind,
        tag: "Tailwind CSS"
    },
    {
        src: material,
        tag: "Material UI"
    },
    {
        src: figma,
        tag: "Figma"
    },
    {
        src: nodejs,
        tag: "Node.js"
    },
    {
        src: express,
        tag: "Express"
    },
    {
        src: query,
        tag: "React Query"
    },
    {
        src: mongo,
        tag: "MongoDB"
    },
    {
        src: firebase,
        tag: "Firebase"
    },
    {
        src: sanity,
        tag: "Sanity"
    },
    {
        src: solidity,
        tag: "Solidity"
    },
    {
        src: hardhat,
        tag: "Hardhat"
    },
    {
        src: truffle,
        tag: "Truffle"
    },
    {
        src: ethers,
        tag: "Ethers.js"
    },
    {
        src: web3,
        tag: "Web3.js"
    },
    {
        src: ipfs,
        tag: "IPFS"
    }
]
