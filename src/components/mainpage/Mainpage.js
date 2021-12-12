import {Accordion} from 'react-bootstrap'
const mainpage=()=>{
    return(
        <div className="container">
        <Accordion defaultActiveKey="0" className="m-3">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                React a été conçu comme étant une bibliothèque et non un framework MVC, comme peuvent l'être ses concurrents18. Ainsi, React encourage la création de composants réutilisables, avec en entrée des données, pouvant changer au cours du temps18.

Par ailleurs, React n'utilise pas de système de templates et ne fonctionne qu'avec du JavaScript, permettant une encapsulation complète du composant au sein d'une unique classe18. Pour faciliter l'écriture de la vue, l'équipe initiale chez Facebook a développé un langage, JSX, qui permet de générer des objets Javascript avec une notation similaire à HTML19.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
Grâce à React, il est facile de créer des interfaces utilisateurs interactives. Définissez des vues simples pour chaque état de votre application, et lorsque vos données changeront, React mettra à jour, de façon optimale, juste les composants qui en auront besoin.

Des vues déclaratives rendent votre code plus prévisible et plus facile à déboguer.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    )
}
export default mainpage;