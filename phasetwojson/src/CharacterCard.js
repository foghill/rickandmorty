import React from "react";
import {
  Card,
  Image,
  Button,
  Icon,
  Label,
  Grid,
} from "semantic-ui-react";

function CharacterCard({ characterData, handleDelete, handleClickLikes }) {
  const { id, status, name, species, image, likes } = characterData;
  //This is a destructuring assignment to extract the properties from the characterData object.

  return (
    <Grid.Column mobile={16} tablet={8} computer={4} style={{ padding: "1rem" }}>
      <Card color="blue">
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">
              {status} - {species}
            </span>
          </Card.Meta>
          <Card.Description>
            <Label color="red" tag>
              <Icon name="heart" /> {likes}
            </Label>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="red" onClick={() => handleClickLikes(characterData)}>
            <Icon name="heart" /> Like
          </Button>
          <Button basic color="blue" onClick={() => handleDelete(id)}>
            <Icon name="trash" /> Delete
          </Button>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default CharacterCard;
