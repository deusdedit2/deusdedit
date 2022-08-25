import { motion, MotionProps, useMotionValue } from "framer-motion"
import { useState } from "react";


interface cardProps extends MotionProps {
    id: string;
    title: string;
    description: string;
    options?: {
        id: string;
        name: string;
        langUrl: {
            url: string;
        } | null;
    }[];
    siteUrl?: string | null;
    ghUrl?: string | null;
}

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
export const closeSpring = { type: "spring", stiffness: 300, damping: 35 };

const scaleTranslate = ({ x, y, scaleX, scaleY }: any) =>
    `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;

export function Card({ title, description, options, id, siteUrl, ghUrl, ...rest }: cardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const zIndex = useMotionValue(isExpanded ? 2 : 0);

    function checkZIndex(latest: any) {
        if (isExpanded) {
            zIndex.set(2);
        } else if (!isExpanded && latest.scaleX < 1.01) {
            zIndex.set(0);
        }
    }

    const selectHandler = () => {
        setIsExpanded(!isExpanded)
    }

    // console.log(options.langUrl)

    return (
        <>
            <motion.div {...rest} layout>
                <li className={`card`}>
                    <div className={`card-content-container ${isExpanded && "open"}`} onClick={selectHandler}>
                        <motion.div
                            className="card-content"
                            transition={isExpanded ? openSpring : closeSpring}
                            layout={true}
                            onUpdate={checkZIndex}
                        >
                            <motion.div
                                className="card-image-container">
                                <motion.img
                                    className="card-image"
                                    src="https://media.graphassets.com/HE1ToT38RjQL3EKv9w1r"
                                    alt=""
                                    initial={false}
                                    transition={closeSpring}
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div
                                className="title-container"
                                initial={false}
                                transition={isExpanded ? openSpring : closeSpring}
                                transformTemplate={scaleTranslate}
                                style={{ originX: 0, originY: 0 }}
                            >
                                <h2>{title}</h2>
                            </motion.div>
                            <motion.div
                                className="content-container"
                                style={{ originY: 0, originX: 0 }}
                            >
                                <p>{description}</p>

                            </motion.div>
                            <motion.div style={{ borderTop: "1px solid #666", margin: "0 20px", padding: "10px 0", display: "flex", justifyContent: "space-between" }}>
                                <div>

                                    {options?.map((item) => {
                                        return (
                                            item.langUrl?.url && <img key={item.id} src={item.langUrl?.url} style={{ width: "1.5rem", height: "1.5rem", margin: "0 2px" }} alt="" />
                                        )
                                    })}
                                </div>

                                <div className="flex">
                                    {ghUrl &&
                                        <a href={ghUrl} rel="me nofollow noopener noreferrer" target="_blank" style={{ width: "1.5rem", height: "1.5rem", margin: "0 4px" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 249" preserveAspectRatio="xMinYMin meet">
                                                <g fill="#fff">
                                                    <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" /><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                                                </g>
                                            </svg>
                                        </a>
                                    }

                                    {siteUrl &&
                                        <a href={siteUrl} rel="me nofollow noopener noreferrer" target="_blank" style={{ width: "1.5rem", height: "1.5rem", margin: "0 4px" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                                <path
                                                    fill="#fff"
                                                    d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771" />
                                            </svg>
                                        </a>
                                    }
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </li>
            </motion.div>
            <Overlay isExpanded={isExpanded} onClick={selectHandler} />
        </>
    )
}

const Overlay = ({ isExpanded, onClick }: any) => (
    <motion.div
        initial={false}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isExpanded ? "auto" : "none" }}
        className="overlay"
        onClick={onClick}
    >
    </motion.div>
);
