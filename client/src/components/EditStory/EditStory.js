// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useGameContext } from "../../contexts/StoryContext";

// import { useForm } from "../../hooks/useForm";
// import { useService } from "../../hooks/useService";
// import { gameServiceFactory } from "../../services/storyService";

// export const EditGame = () => {
//     const { onGameEditSubmit } = useGameContext();
//     const { gameId } = useParams();
//     const gameService = useService(gameServiceFactory);
//     const { values, changeHandler, onSubmit, changeValues } = useForm({
//         _id: '',
//         title: '',
//         category: '',
//         maxLevel: '',
//         imageUrl: '',
//         summary: '',
//     }, onGameEditSubmit);

//     useEffect(() => {
//         gameService.getOne(gameId)
//             .then(result => {
//                 changeValues(result);
//             });
//     }, [gameId]);

//     return (
//         <section id="edit-page" className="auth">
//             <form id="edit" method="post" onSubmit={onSubmit}>
//                 <div className="container">

//                     <h1>Edit Game</h1>
//                     <label htmlFor="leg-title">Legendary title:</label>
//                     <input
//                         type="text"
//                         id="title"
//                         name="title"
//                         value={values.title}
//                         onChange={changeHandler}
//                     />

//                     <label htmlFor="category">Category:</label>
//                     <input
//                         type="text"
//                         id="category"
//                         name="category"
//                         value={values.category}
//                         onChange={changeHandler}
//                     />

//                     <label htmlFor="levels">MaxLevel:</label>
//                     <input
//                         type="number"
//                         id="maxLevel"
//                         name="maxLevel"
//                         min="1"
//                         value={values.maxLevel}
//                         onChange={changeHandler}
//                     />

//                     <label htmlFor="game-img">Image:</label>
//                     <input
//                         type="text"
//                         id="imageUrl"
//                         name="imageUrl"
//                         value={values.imageUrl}
//                         onChange={changeHandler}
//                     />

//                     <label htmlFor="summary">Summary:</label>
//                     <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>
//                     <input className="btn submit" type="submit" value="Edit Game" />

//                 </div>
//             </form>
//         </section>
//     );
// };

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoryContext } from "../../contexts/StoryContext";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { storyServiceFactory } from "../../services/storyService";

export const EditStory = () => {
    const { onStoryEditSubmit } = useStoryContext();
    const { storyId } = useParams();
    const storyService = useService(storyServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    }, onStoryEditSubmit);

    useEffect(() => {
        storyService.getOne(storyId)
            .then(result => {
                changeValues(result);
            });
    }, [storyId]);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" method="post" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Story</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        value={values.maxLevel}
                        onChange={changeHandler}
                    />

                    <label htmlFor="story-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={values.summary} onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Edit Story" />

                </div>
            </form>
        </section>
    );
};