import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { db, auth } from "../../firebase/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Repos({ posts, name, tags, desc }) {
  const [user] = useAuthState(auth);

  const handleSave = async (name, desc, link, tags,upforgrabs__link ) => {
    try {
      const docRef = await addDoc(collection(db, "mySaves"), {
        userId: user?.email,
        name: name,
        desc: desc,
        link: link,
        tags: tags,
        upforgrabs__link : upforgrabs__link ,
        
      });
      console.log("Saved successfully");
      alert("Saved Successfully!");
    } catch (e) {
      console.log(e);
      alert("Server error : Could not save");
    }
  };

  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl items-center mx-auto gap-12 pr-10">
        {posts.map(({ name, desc, link, tags, upforgrabs__link  }, index) => (
          <div
            className=" w-full rounded-lg shadow-md lg:max-w-sm m-4 grid gap-8 p-4 h-full pt-3"
            key={index}
          >
            <h4 className="text-xl font-semibold text-blue-500">{name}</h4>

            <p className="mb-2 leading-normal">{desc}</p>

            <p className="leading-normal text-sm text-blue-500 bg-blue-100 rounded shadow px-3 py-1 w-1/3 h-7 ">
              {tags}
            </p>

            <div className="extra-btn">
              <div className="small-btn">
                <div className=" flex justify-end items-center">
                  <a className=" sbtn hover:cursor-pointer">
                    <div className="s-btn">
                      <BsFillBookmarkFill
                        className="text-gray-500 hover:text-green-600  text-2xl"
                        onClick={() => {
                          handleSave(name, desc, link, tags,upforgrabs__link);
                        }}
                      />
                    </div>
                  </a>
                </div>

                <div className=" flex justify-end items-center">
                  <a className=" ibtn hover:cursor-pointer">
                    <p>
                      <a href={upforgrabs__link}>
                        <div className="i-btn">
                          <AiOutlineInfoCircle className="text-indigo-500 hover:text-green-700 text-2xl ml-2" />
                        </div>
                      </a>
                    </p>
                  </a>
                </div>
              </div>

              <div className="rd-btn flex justify-end items-center">
                <a
                  href={link}
                  className="rd-btn text-sm text-blue-100 bg-blue-600 rounded shadow px-8 py-2"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Repos;
