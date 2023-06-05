export const next = require("../../../public/assets/skills/next.png");
export const typescript = require("../../../public/assets/skills/typescript.png");
export const redux = require("../../../public/assets/skills/redux.png");
export const tailwind = require("../../../public/assets/skills/tailwind.png");
export const material = require("../../../public/assets/skills/material.png");
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

import Image from 'next/image'

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
    }
]

export default function Skills() {
  return (
    <div>
        <h2 className='text-xl font-semibold text-center w-full'>Skills</h2>
        <div className="w-full flex">
            <section className="text-center w-1/3">
                <div className="flex flex-wrap justify-center">
                {frontend.map((skill, index) => (
                    <div key={index} className="bg-primary/50 rounded-xl p-2 m-2">
                        <Image src={skill.src} alt={skill.tag} width={40}/>
                    </div>    
                ))}
                </div>
                <p className="font-semibold">Frontend</p>
            </section>
            <section className="text-center border-x border-black w-1/3">
                <div className="flex flex-wrap justify-center">
                {backend.map((skill, index) => (
                    <div key={index} className="bg-primary/50 rounded-xl p-2 m-2">
                        <Image src={skill.src} alt={skill.tag} width={40}/>
                    </div>    
                ))}
                </div>
                <p className="font-semibold">Backend</p>
            </section>
            <section className="text-center w-1/3">
                <div className="flex flex-wrap justify-center">
                {blockchain.map((skill, index) => (
                    <div key={index} className="bg-primary/50 rounded-xl p-2 m-2">
                        <Image src={skill.src} alt={skill.tag} width={40}/>
                    </div>    
                ))}
                </div>
                <p className="font-semibold">Blockchain</p>
            </section>
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