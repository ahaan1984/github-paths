import { useState } from 'react'

const Form = ({ onFormSubmit }) => {
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');

  const updateOwner = (e) => {
    setOwner(e.target.value);
  }

  const updateRepo = (e) => {
    setRepo(e.target.value);
  } 

  const handleButtonClick = (e) => {
    e.preventDefault()
    console.log('Owner:', owner);
    console.log('Repo:', repo);
    const link = `https://api.github.com/repos/${owner}/${repo}/contents` // + owner + "/" + repo  + "/contents";
    console.log(link);
    onFormSubmit(link);
    setOwner('');
    setRepo('');
  };


  return (
    <form className="flex flex-col justify-center items-center">
      <div className="block mb-2 font-bold text-gray-400">Enter Owner: </div>
      <input className='w-full py-4 px-4 mx-4 my-4 rounded bg-inherit border border-gray-700 text-gray-300'
        type="text" 
        value={owner}
        onChange={updateOwner}
      />
      <div className="block mb-2 font-bold text-gray-400">Enter Repo Name:</div>
      <input className='w-full py-4 px-4 mx-4 my-4rounded bg-inherit border border-gray-700 text-gray-300'
        type="text"
        value={repo}
        onChange={updateRepo}
      />
      <button type="button" onClick={handleButtonClick} className='w-full py-4 px-4 mx-4 my-8 bg-blue border border-blue-500 text-gray-400 rounded hover:bg-blue-500'>
        Submit
      </button>
    </form>
  );
};


export default Form
