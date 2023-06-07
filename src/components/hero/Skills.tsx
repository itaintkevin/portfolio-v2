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

const frontend = [
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
    }
]

const backend = [
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
]

const blockchain = [
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

export default function Skills() {
  return (
    <div className='lg:mt-0 mt-10 xs:mx-0'>
        <h2 className='text-2xl font-semibold text-center w-full'>Skills</h2>
        <div className="hidden w-full sm:flex flex-wrap justify-center">
            <section className="text-center sm:w-1/3">
                <div className="flex flex-wrap justify-center">
                {frontend.map((skill, index) => (
                    <div key={index} className="border dark:border-2 border-primary/40 dark:border-secondary/20 bg-primary/10 rounded-lg p-2 m-2">
                        <Image src={skill.src} alt={skill.tag} width={30} className="w-[5vh] h-[5vh]"/>
                    </div>    
                ))}
                </div>
                <p className="hidden sm:block font-semibold">Frontend</p>
            </section>
            <section className="text-center sm:border-x dark:sm:border-x-2 border-black dark:border-secondary/20 sm:w-1/3">
                <div className="flex flex-wrap justify-center">
                {backend.map((skill, index) => (
                    <div key={index} className="border dark:border-2 border-primary/40 dark:border-secondary/20 bg-primary/10 rounded-lg p-2 m-2">
                        <Image src={skill.src} alt={skill.tag} width={30} className="w-[5vh] h-[5vh]"/>
                    </div>    
                ))}
                </div>
                <p className="hidden sm:block font-semibold">Backend</p>
            </section>
            <section className="text-center sm:w-1/3">
                <div className="flex flex-wrap justify-center">
                {blockchain.map((skill, index) => (
                    <div key={index} className="border dark:border-2 border-primary/40 dark:border-secondary/20 bg-primary/10 rounded-lg p-2 m-2">
                        <Image src={skill.src} alt={skill.tag} width={30} className="w-[5vh] h-[5vh]"/>
                    </div>    
                ))}
                </div>
                <p className="hidden sm:block font-semibold">Blockchain</p>
            </section>
        </div>
        <div className="sm:hidden flex flex-wrap justify-center mx-auto">
            {skills.map((skill, index) => ( 
                <div key={index} className="border dark:border-2 border-primary/40 dark:border-secondary/20 bg-primary/10 rounded-lg p-2 m-2 w-max">
                    <Image src={skill.src} alt={skill.tag} width={40}/>
                </div>  
            ))}
        </div>
    </div>
  )
}


/*
    Next.js
    Typescript
    TailwindCSS
    MUI
    Redux

    React Query
    Node.js
    Express.js
    MongoDB
    Firebase
    Sanity

    Solidity
    Hardhat
    Truffle
    Ethers.js
    Web3.js
*/