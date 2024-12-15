
import Swal from "sweetalert2";
import useAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";



const AddJob = () => {

    const { user } = useAuth();

    const navigate = useNavigate();

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target)
        // console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries())
        // console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        console.log(newJob)

        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job has been Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJobs')
                }
            })




    }
    return (
        <div>
            <h2 className="text-3xl text-center">Post A new Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="job title" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name="location" placeholder="job location" className="input input-bordered" required />

                </div>
                {/* job type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select defaultValue="Pick a Job Type" className="select select-ghost w-full max-w-xs">
                        <option disabled>Pick a Job Type</option>
                        <option>Full-Time</option>
                        <option>Intern</option>
                        <option>Part-Time</option>
                    </select>

                </div>
                {/* job Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select defaultValue="Pick a Job Field" className="select select-ghost w-full max-w-xs">
                        <option disabled >Pick a Job Field</option>
                        <option>Engineering</option>
                        <option>marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>

                </div>
                {/* salary Range */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name="max" placeholder="Max" className="input input-bordered" required />

                    </div>
                    <div className="form-control">

                        <input type="text" name="min" placeholder="Min" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Currency</span>
                        </label>
                        <select defaultValue="Currency" name="currency" className="select select-ghost w-full max-w-xs">
                            <option disabled >Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>

                        </select>

                    </div>
                </div>
                {/* job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="job Description" name="description" required></textarea>
                </div>

                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name="company" placeholder="company name" className="input input-bordered" required />

                </div>
                {/* requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Put Each requirements in a new line" name="requirements" required></textarea>
                </div>

                {/* responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Write each responsibilities in a new line" name="responsibilities" required></textarea>
                </div>

                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered" required />

                </div>
                {/* HR email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} name="hr_email" placeholder="HR Email" className="input input-bordered" required />

                </div>
                {/* Application Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="date"  name="applicationDeadline" placeholder="application deadline" className="input input-bordered" required />

                </div>

                {/* Company Logo URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="text" name="company_logo" placeholder="Company Logo URL" className="input input-bordered" required />

                </div>

                {/* Submit btn */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;