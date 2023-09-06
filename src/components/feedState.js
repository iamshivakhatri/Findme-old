import NoteContext from "./feedContext";
import { useState } from "react";
import create from '../PICS/create.png'
import supabase from "./client";

const NoteState = (props) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Find me',
      description: 'I am developing the find me app.',
      media: create, // Replace with actual URL or leave blank

    },
    {
      id: 2,
      title: 'Recipe Sharing App',
      description: 'Hi guys, I am using AI and trying to make the recipe app. If anyone is interested you can comment down.',
      media: create, // Replace with actual URL or leave blank

    },
    {
        id: 3,
        title: 'Nourish Kid',
        description: 'I am very good at gpting stuff and you can almost call me gpt yadav. I am good at talking',
        media: create, // Replace with actual URL or leave blank

      }
    ])

  // Add a project
  const addPost = async (newProject) => {
    let thisid = projects.length + 1;
    const addProj = {
      id: thisid,
      title: newProject.title,
      description: newProject.description,
      media: newProject.picture,
    };
    setProjects([...projects, addProj]);

    //Adding on the database
    const { data, error } = await supabase
      .from("post")
      .insert([
        {
          title: newProject.title,
          description: newProject.description
        },
      ])
      .select();

    if (!data) {
      console.log("There is no data when adding");
    }
    const file = newProject.picture

   //Adding image to the database
   
    const { dataImage, errorImage } = await supabase.storage.from('photofeed').upload('public'+ file?.name,file)
    if (errorImage) {
      // Handle error
      console.log("Error while uploading the photo")
    } else {
      // Handle success
      console.log("No error while uploading the file")
    }

  };

  //get the data from the supabase
  const fetchprojects = async () => {
    const { data, error } = await supabase.from("photofeed").select();
    if (error) {
      
      setprojects(null);
    }
    if (data) {
      setprojects(data);
      
    }
  };
  fetchprojects();
}, []);

//till here


  return (
    <NoteContext.Provider value={{ projects, addPost }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;