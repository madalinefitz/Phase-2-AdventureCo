import { Card} from 'semantic-ui-react'; 



function StoryCard({name, country, story, rating }){

    return(
        <Card centered style={{width: '80%'}}>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{country}</Card.Meta>
                <Card.Description>{story}</Card.Description>
                <Card.Description>{rating}</Card.Description>
            </Card.Content>
        </Card>
    
        
    )
}

export default StoryCard;

