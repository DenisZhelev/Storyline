// import { useForm } from '../../hooks/useForm';
// import { useGameContext } from '../../contexts/StoryContext';

// export const CreateGame = () => {
//     const {onCreateGameSubmit} = useGameContext();
//     const { values, changeHandler, onSubmit } = useForm({
//         title: '',
//         category: '',
//         maxLevel: '',
//         imageUrl: '',
//         summary: '',
//     }, onCreateGameSubmit);

//     return (
//         <section id="create-page" className="auth">
//             <form id="create" method="post" onSubmit={onSubmit}>
//                 <div className="container">
//                     <h1>Create Game</h1>

//                     <label htmlFor="leg-title">Legendary title:</label>
//                     <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter game title..." />

//                     <label htmlFor="category">Category:</label>
//                     <input value={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Enter game category..." />

//                     <label htmlFor="levels">MaxLevel:</label>
//                     <input value={values.maxLevel} onChange={changeHandler} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

//                     <label htmlFor="game-img">Image:</label>
//                     <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

//                     <label htmlFor="summary">Summary:</label>
//                     <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>
//                     <input className="btn submit" type="submit" value="Create Game" />
//                 </div>
//             </form>
//         </section>
//     );
// };

import { useForm } from '../../hooks/useForm';
import { useStoryContext } from '../../contexts/StoryContext';

export const CreateStory = () => {
    const {onCreateStorySubmit} = useStoryContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    }, onCreateStorySubmit);

    return (
        <section id="create-page" className="auth">
            <form id="create" method="post" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Story</h1>

                    <label htmlFor="leg-title">Legendary title:</label>
                    <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter story title..." />

                    <label htmlFor="category">Category:</label>
                    <input value={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Enter story category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input value={values.maxLevel} onChange={changeHandler} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="story-img">Image:</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Create Story" />
                </div>
            </form>
        </section>
    );
};