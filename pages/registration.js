import { User_Input } from "@/redux/actionTypes/actionTypes";
import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const registration = () => {

    const dispatch = useDispatch();

    const state = useSelector((state) => state)

    console.log(state);

    const handelSubmitForm = (event) => {
        event.preventDefault();
        // console.log(state);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phoneNumber = event.target.phoneNumber.value;
        const password = event.target.password.value;
        const image = event.target.image.files[0];
        const userInfo = {
            name, email, phoneNumber, password
        }
        // console.log(name, email, phoneNumber, password);
        // console.log(userInfo);

        fetch(`http://localhost:5000/user/${email}`,{
            method: "PUT",
            headers:{
                "content-type": "application/json",
            },
            body:JSON.stringify(userInfo)
        })
        .then(res=>res.json)
        .then(data=>{
            console.log(data);
        })


        // // upload image to image bb and get the link

        // const formData = new FormData;
        // formData.append("image", image);
        // console.log(formData);

        // const imageBBurl = `https://api.imgbb.com/1/upload?key=${"0c1263ea8fd9c400053f888911233802"}`;

        // fetch(imageBBurl, {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then(res => res.json())
        //     .then(imageData => {
        //         console.log(name, email, phoneNumber, password, imageData.data.display_url);

        //     })
        //     .catch(err => {
        //         console.error(err);
        //     });
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <Head><title>Registration</title></Head>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">New User Registration</h1>
                    <p className="py-6">New user registration requre name, email address, phone number, photo and password </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmitForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" placeholder="phone number" name="phoneNumber" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Upload Image</span>
                            </label>
                            <input type="file" name="image" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <p>Already have a account. <Link href="login" className="text-sm underline">Please Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="Register"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default registration;