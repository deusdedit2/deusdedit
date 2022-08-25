import classNames from "classnames";
import { useEffect, useState } from "react"
import Logo from "./Logo";
import i18n from '../i18n'
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const langs = [
    { code: 'en', nativeName: 'English', flag: '&#127463;&#127479;' },
    { code: 'pt_BR', nativeName: `Portuguese - BR`,flag:'&#127463;&#127479;' },
];

export function Header() {

    const [active, setActive] = useState(false)
    const { t } = useTranslation();

    useEffect(() => {
        window.onscroll = () => {
            var top = window.pageYOffset || document.documentElement.scrollTop;
            top > 10 ? setActive(true) : setActive(false)
        }
    }, [])

    function changeLocale(l: string) {
        i18n.changeLanguage(l);
    }

    return (
        <header className={classNames('header', {
            'scrolled': active,
        })} >
            <div className="container flex flex-align-center flex-between header_container">

                <a href="/" style={{ width: "55px", height: "58px" }}>
                    <Logo />
                </a>

                <div className="dropdown-container">
                    <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
                    <label className="for-dropdown" htmlFor="dropdown">{t('language')} <i className="uil uil-arrow-down"></i></label>
                    <div className="section-dropdown">
                        { langs.map((lang) => {
                            return (
                                <a key={lang.code} onClick={() => changeLocale(lang.code)} href="">{lang.nativeName} </a>
                            )
                        }) }
                    </div>
                </div>
            </div>
        </header>
    )
}