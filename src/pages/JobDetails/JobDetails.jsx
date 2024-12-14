import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const job = useLoaderData();
    const { _id, title, company, applicationDeadline } = job;
    // console.log(job)
    return (


        <div>
            <div
                className="hero min-h-96"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>

            </div>

            <div className="m-10 ">

                <h1 className="text-4xl">Job Details {title}</h1>
                <p>Apply for: {company}</p>
                <p>DeadLink: {applicationDeadline}</p>
                <Link to={`/jobApply/${_id}`}><button className="btn btn-primary">Apply Now</button></Link>
            </div>

        </div>
    );
};

export default JobDetails;