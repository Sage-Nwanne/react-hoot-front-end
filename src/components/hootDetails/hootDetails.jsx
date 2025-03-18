import { useParams } from "react-router";


import { useState, useEffect } from 'react';
import * as hootService from '../../services/hootService';


const HootDetails = () => {

    const [hoot, setHoot] = useState(null);

    const { hootId } = useParams();
    console.log('hootId', hootId)

    useEffect(() => {
        const fetchHoot = async () => {

          const hootData = await hootService.show(hootId);


          setHoot(hootData);
        };
        fetchHoot();
      }, [hootId]);

      if (!hoot) {
        return <h2>Loading...</h2>;
      }
      return (
        <main>
         <section>
        <h2>Comments</h2>

        {!hoot.comments.length && <p>There are no comments.</p>}

        {hoot.comments.map((comment) => (
          <article key={comment._id}>
            <header>
              <p>
                {`${comment.author.username} posted on
                ${new Date(comment.createdAt).toLocaleDateString()}`}
              </p>
            </header>
            <p>{comment.text}</p>
          </article>
        ))}
      </section>
        </main>
      );
}


export default HootDetails;