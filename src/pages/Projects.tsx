import { LayoutGroup, motion } from 'framer-motion'
import { Card } from '../components/Card'

const data = {
    "projects": [
        {
            "__typename": "Project",
            "id": "cl6wgpwivhcmb0disx0ix0iva",
            "title": "Flor de Chita E-commerce",
            "siteUrl": "https://flordechitateste.herokuapp.com/",
            "githubUrl": null,
            "description": "E-commerce website made for a clothing store.",
            "image": {
                "__typename": "Asset",
                "url": "https://dummyimage.com/1920x1080/acacac/000000.png&text=dummy"
            }
        },
        {
            "__typename": "Project",
            "id": "cl6wgpwivhcmb0disx0ix0ive",
            "title": "Flor de Chita E-commerce",
            "siteUrl": "https://flordechitateste.herokuapp.com/",
            "githubUrl": null,
            "description": "E-commerce website made for a clothing store.",
            "image": {
                "__typename": "Asset",
                "url": "https://dummyimage.com/1920x1080/acacac/000000.png&text=dummy"
            }
        },
        {
            "__typename": "Project",
            "id": "cl6wgpwivhcmb0disx0ix0ivf",
            "title": "Flor de Chita E-commerce",
            "siteUrl": "https://flordechitateste.herokuapp.com/",
            "githubUrl": null,
            "description": "E-commerce website made for a clothing store.",
            "image": {
                "__typename": "Asset",
                "url": "https://dummyimage.com/1920x1080/acacac/000000.png&text=dummy"
            }
        },
        {
            "__typename": "Project",
            "id": "cl6wgpwivhcmb0disx0ix0ivg",
            "title": "Flor de Chita E-commerce",
            "siteUrl": "https://flordechitateste.herokuapp.com/",
            "githubUrl": null,
            "description": "E-commerce website made for a clothing store.",
            "image": {
                "__typename": "Asset",
                "url": "https://dummyimage.com/1920x1080/acacac/000000.png&text=dummy"
            }
        },
        {
            "__typename": "Project",
            "id": "cl6wgpwivhcmb0disx0ix0ivh",
            "title": "Flor de Chita E-commerce",
            "siteUrl": "https://flordechitateste.herokuapp.com/",
            "githubUrl": null,
            "description": "E-commerce website made for a clothing store.",
            "image": {
                "__typename": "Asset",
                "url": "https://dummyimage.com/1920x1080/acacac/000000.png&text=dummy"
            }
        },
        {
            "__typename": "Project",
            "id": "cl6wgpwivhcmb0disx0ix0ivi",
            "title": "Flor de Chita E-commerce",
            "siteUrl": "https://flordechitateste.herokuapp.com/",
            "githubUrl": null,
            "description": "E-commerce website made for a clothing store.",
            "image": {
                "__typename": "Asset",
                "url": "https://dummyimage.com/1920x1080/acacac/000000.png&text=dummy"
            }
        },
        {
            "__typename": "Project",
            "id": "cl6wgpwivhcmb0disx0ix0ivj",
            "title": "Flor de Chita E-commerce",
            "siteUrl": "https://flordechitateste.herokuapp.com/",
            "githubUrl": null,
            "description": "E-commerce website made for a clothing store.",
            "image": {
                "__typename": "Asset",
                "url": "https://dummyimage.com/1920x1080/acacac/000000.png&text=dummy"
            }
        },
        {
            "__typename": "Project",
            "id": "cl6wgpwivhcmb0disx0ix0ivk",
            "title": "Flor de Chita E-commerce",
            "siteUrl": "https://flordechitateste.herokuapp.com/",
            "githubUrl": null,
            "description": "E-commerce website made for a clothing store.",
            "image": {
                "__typename": "Asset",
                "url": "https://dummyimage.com/1920x1080/acacac/000000.png&text=dummy"
            }
        },
    ]
}

export function Projects() {
    return (
        <main className="container">
            <div className="section">
                <h1>Teste</h1>

                <motion.ul
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "30px", marginTop: "50px" }}>


                        {
                            data &&

                            data?.projects.map((project, count) => {
                                return (
                                    <LayoutGroup key={count} id={`card-${count}`}>
                                        <Card id={`${count}`} layout title={project.title} description={project.description} key={project.id} initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: count * .2 }} viewport={{ once: true }} />
                                    </LayoutGroup>
                                )
                            })
                        }

                    </motion.ul>
            </div>
        </main>
    )
}