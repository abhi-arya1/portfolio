import { GitHub, LogoDev } from "@mui/icons-material";

const Experiences = () => {
    return ( 
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row">  
                    <h1 className="font-bold text-xl pb-1">NASA Johnson Space Center</h1>
                    <div role="button" className="pl-5 hover:text-white transition-colors ease-in-out" onClick={() => {window.open('https://github.com/abhi-arya1/zotconnect', '_blank')}}>
                        <GitHub />
                    </div>
                </div>
                <h2 className="">SUITS Project Manager and Full Stack Developer Intern</h2>
                <ul className="pt-3">
                    <li className="arrow-li flex items-start">
                        Details Soon...
                    </li>
                </ul>
                <div className="pt-4 flex flex-wrap gap-y-3 items-center justify-center">
                    {['REST API Development', 'More Soon...'].map((item, idx) => { return (
                        <div key={idx} className="p-1">
                            <span className="bg-white p-[0.4rem] rounded-lg">{item}</span>
                        </div>
                    )})}
                </div>
            </div>
        </div> 
    );
}
 
export default Experiences;