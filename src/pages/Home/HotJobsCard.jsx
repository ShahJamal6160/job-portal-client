import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";


const HotJobsCard = ({ job }) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <div className="flex gap-2 m-2">
                <figure>
                    <img
                        className="16"
                        src={company_logo}
                        alt="logo" />
                </figure>
                <div>
                    <h1 className="text-2xl">{company}</h1>
                    <p className="flex gap-2 items-center"> <FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {
                        requirements.map((skill, index) => <p key={index}
                            className="border rounded-md text-center px-2 hover:text-blue-300 "
                        >{skill}</p>)


                    }
                </div>
                <div className="card-actions justify-end items-center mt-4">
                    <p className="flex items-center">Salary: <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                    <button className="btn btn-primary">Apply</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;