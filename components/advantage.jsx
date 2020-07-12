import React from "react";
import styles from "./advantage.module.css";


function Advantage(props){
    return(
        <div id="introduction" className={styles.advantage}>
            <div className={styles.character}>
                <img src="/icons/safe.png"></img>
                {props.isEn? <h1>First-class Paper Cup</h1> : <h1>一流品质</h1>}
                {props.isEn? <p>ISUN was established in Nov.2002 and ran for <span>18 years.</span>Now we are specially making and exporting the highest quality paper cup ( with the world strictest <span>Germany TUV/LFGB certificates , SGS/FDA certificates, EU pharmaceutical standard of Microbiological criteria and hygienic certificates</span>,etc.)</p> :
                 <p>以恒成立于2002年11月，从事外贸行业，至今已运营<span>18年</span>。目前我们专注于生产和出口优质纸杯这一产品。我们取得了世界上多个国家的质量认证，如<span>德国的TUV/LFGB认证、SGS/FDA认证、欧盟药品微生物标准及卫生证书</span>等等。</p>}
            </div>

            <div className={styles.character}>
                <img src="/icons/sitemap-solid.svg"></img>
                {props.isEn? <h1>Complete Organizations</h1> : <h1>组织完善</h1>}
                {props.isEn? <p>ANHUI ISUN International is Export Sales company of ANHUIBEST ISUN Group, which consists of <span>a I/E sales company, Two manufacturing Corps , one R&D institute and a overseas sales net.</span>Our Worshop located In Hefei industial Zone , occupy 2.26 hectare land with 40500 m³ workshop building of self property right.</p>
                    : <p>安徽以恒集团旗下拥有一个进出口贸易公司，一个研发中心，一个海外分支机构和一个工厂。我们<span>自主拥有的现代化工厂坐落于合肥工业区，占地34亩</span>。工厂拥有国际一流的生产设备和研发能力，技艺娴熟的工人和尽职负责的管理团队。</p>}
            </div>

            <div className={styles.character}>
                <img src="/icons/users-solid.svg"></img>
                {props.isEn? <h1>Extrodinary Team</h1> : <h1>卓越团队</h1>}
                {props.isEn? <p>The Owner of the company started doing international trading business <span>29 years</span> ago. ANHUI ISUN group has strong management with a team of highly trained and experienced members. Each of us has either <span>PhD or Master degrees</span> in technology or business development from USA, Singapore and University Of Science & Technology of China.</p>
                    : <p>以恒的创始人从事外贸行业已经<span>超过29年</span>，管理层的所有成员都拥有丰富的经验、卓越的能力和务实的作风。<span>主要管理团队都拥有硕士以上学历</span>，分别于美国、新加坡等国游学或游离。有广阔的国际视野和国际交友圈。</p>}
            </div>
        </div>
    )
}

export default Advantage;
