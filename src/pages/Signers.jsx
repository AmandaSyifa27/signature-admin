// import axios from "axios";
// import { useEffect, useRef, useState } from "react";

import axios from "axios";
import { useEffect, useState } from "react"
import { Form } from "react-router-dom";

// const Signers = () => {
//     const [signers, setSigners] = useState([]);

//     const baseUrl = 'http://103.175.221.36:8000/signer';

//     useEffect(() => {
//         axios.get(baseUrl)
//         .then(response => {
//             setSigners(response.data);
//             console.log("response.data:", response.data)
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     },[])
//     // const getSigners = () => {
//     //     axios.get(baseUrl)
//     //     .then((response) => {
//     //         setSigner(response.data);
//     //     })
//     //     .catch((error) => console.log(error));
//     // };

//     // const fetch = useRef(true);

//     // useEffect(() => {
//     //     if (fetch.current) {
//     //         getSigners();
//     //         fetch.current = false;
//     //     }
//     // }, []);

//     // const signerName = useRef("");
//     // const signerEmail = useRef("");
//     // const signerPosition = useRef("");
//     // const signerPhone = useRef("");

//     // const getData = () => {
//     //     // e.preventDefault();

//     //     // const params = {
//     //     //     name: signerName.current.valueOf,
//     //     //     email: signerEmail.current.valueOf,
//     //     //     Position: signerPosition.current.valueOf,
//     //     //     phone: signerPhone.current.valueOf,
//     //     // };

//     //     let name = signerName.current.valueOf;
//     //     console.log(name);

//     //     setSigner([]);
//     //     console.log("signer:",signer);
//     //     // axios.get(`${baseUrl}`)
//     // };
//     // getData();

//     return (
//         <div className="signer">
//             <p>hai</p>
//             {signers.map(signer => (
//                 <li key={signer.id}>{signer.name}</li>
//             ))}
//         </div>
//     )
// };

// export default Signers;

const Signers = () => {
    const [signers, setSigners] = useState([]);
    const [searchSigner, setSearchSigner] = useState('');
    const [filteredSigners, setFilteredSigners ] = useState([]);
    const baseUrl = "http://103.175.221.36:8000/signer";
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjEsImlzcyI6IkFOVE0iLCJleHAiOjE3NTA2ODI3ODgsIm5iZiI6MTc0MjkwNjc4OCwiaWF0IjoxNzQyOTA2Nzg4fQ.wzYMqMpSfMWip9GTo0icHO_KZDHuFmmFs4-ja3LIdG0";

    const getSigners = async () => {
        try {
            const response = await axios.get("/signer", {
                headers:{
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            })
            console.log("data:",response.data.data);
            setSigners(response.data.data);
        } catch(error){
            console.log("error:",error)
        };
    }

    const handleInputChange = (e) => {
        const searchName = e.target.value;
        setSearchSigner(searchName);

        const filteredItems = signers.filter((signer) =>
            signer.name.toLowerCase().includes(searchName.toLowerCase())
        );

        setFilteredSigners(filteredItems);
    }

    useEffect(() => {
        getSigners();
    }, []);

    return(
        <div>
            <div>
                <form>
                    <input
                    type="text"
                    value={searchSigner}
                    onChange={handleInputChange}
                    placeholder="Cari nama signer"
                    />
                </form>
            </div>
            <ul>
            {(searchSigner ? filteredSigners : signers).length > 0 ? (
                (searchSigner ? filteredSigners : signers).map((signer) => (
                    <li key={signer.id}>
                        <strong>{signer.name}</strong> - {signer.email} <br />
                        <em>{signer.position}</em> <br />
                        <p>Phone: {signer.phone}</p>
                        {signer.signatures.length > 0 && (
                            <p>Signature: {signer.signatures[0].name}</p>
                        )}
                    </li>
                ))
            ): (
                <p>Data Tidak Ada</p>
            )}
            </ul>
        </div>
    )
}

export default Signers;