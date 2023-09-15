
import sclasses from "../souvenir.module.css";

export default function Report(props) {
    // console.log("Svn: ");
    // console.log(props);
    // console.log(props.sortedSvn);

    // console.log(props.sortedSvn["languages"]);
    return (
        <div id="report" className={sclasses.report} style={{ width: "100%" }}>
            <div className={sclasses.margin}>
                <h1 align="center"> <b> Elise Carman</b> </h1>
                <div align="center"> Expected Graduation: December 2023</div>
                <div align="center"> GPA: 3.84</div>
                <div align="center" class={sclasses.parent}>
                    {props.sortedSvn["languages"].length == 0 ?
                        <div></div>
                        : <div class={sclasses.child}>
                            <h2 align="center">Languages </h2>
                            <ul>{props.sortedSvn["languages"].map((item, index) => (<li index={index}>{item.content}</li>))}</ul>
                        </div>}

                    {props.sortedSvn["skills"].length == 0 ?
                        <div></div>
                        : <div class={sclasses.child}> <h2 align="center">Skills</h2>
                            <ul>{props.sortedSvn["skills"].map((item, index) => (<li index={index}>{item.content}</li>))}</ul></div>}

                </div>

                <br></br>
                {props.sortedSvn["classes"].length == 0 ?
                    <div></div>
                    : <div > <h2 align="center"> Classes of Interest</h2>
                        <br></br>
                        <ul>{props.sortedSvn["classes"].map((item, index) => (<li index={index}>{item.content.name}</li>))}</ul></div>}

                <br></br>
                {props.sortedSvn["projects"].length == 0 ?
                    <div></div>
                    : <div ><h2 align="center"> Projects of Interest</h2>
                        <br></br>
                        <ul>{props.sortedSvn["projects"].map((item, index) => (<li index={index}><b>{item.content.what}</b>
                            <br></br>
                            {item.content.details}</li>))}</ul>
                    </div>}

                <br></br>
                {props.sortedSvn["experiences"].length == 0 ?
                    <div></div>
                    : <div > <h2 align="center">Experiences of Interest</h2>
                        <br></br>
                        <ul>{props.sortedSvn["experiences"].map((item, index) => (<li index={index}>{item.content.where}</li>))}</ul></div>}



            </div>
        </div>
    )
}