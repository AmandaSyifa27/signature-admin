// import axios from "axios";
// import { useEffect, useRef, useState } from "react";

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

import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Signers = () => {
    const [signer, setSigner] = useState([]);
    const baseUrl = "http://103.175.221.36:8000/signer";

    const getSigners = () => {
        axios.get(baseUrl)
        .then((response) => {
            console.log("Response data:", response.data); 
            setSigner(response.data);
        })
        .catch((error) => console.error("Error :", error));
    };

    const fetch = useRef(true);

    useEffect(() => {
        if (fetch.current) {
            getSigners();
            fetch.current = false;
        }
    }, []);

    const getData = () => {
        console.log("signer:", signer);
    };

    return (
        <div className="signer">
            <p>Hai</p>
            <button onClick={getData}>Tampilkan Data</button>
            <ul>
                {signer.length > 0 ? (
                    signer.map((item, index) => (
                        <li key={index}>{item.name} - {item.email}</li>
                    ))
                ) : (
                    <p>Data tidak ditemukan</p>
                )}
            </ul>
        </div>
    );
};

export default Signers;
