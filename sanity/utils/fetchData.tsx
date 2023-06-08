import { client } from '../lib/client'
import { groq } from 'next-sanity'


export async function getAbout() {
    return client.fetch(
        groq`*[_type == "about"]{
            _id,
            name,
            salutation,
            bio[]
        }`
    )
}

export async function getSkills() {
    return client.fetch(
        groq`*[_type == "skills"]{
            _id,
            skills[] {
              skill_name,
              asset {
                _ref
              }  
            }
        }`
    )
}

export async function getProjects() {
    return client.fetch(
        groq`*[_type == "projects"]{
            _id,
            name,
            "slug": slug.current,
            repository,
            deployment,
            date,
            details,
            skills[]
        }`
    )
}

export async function getExperiences() {
    return client.fetch(
        groq`*[_type == "experiences"]{
            _id,
            type,
            "slug": slug.current,
            organization,
            website,
            role,
            date,
            work,
            certificate,
            skills[]
        }`
    )
}