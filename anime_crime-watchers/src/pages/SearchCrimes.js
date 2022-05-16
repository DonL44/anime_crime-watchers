import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

import Auth from "../utils/auth";
// import { searchGooglesamurais } from "../utils/API";
import { savesamuraiIds, getSavedsamuraiIds } from "../utils/localStorage";

import { useMutation } from "@apollo/client";
import { SAVE_SAMURAI } from "../utils/mutations";

const Searchsamurais = () => {
  // create state for holding returned google api data
  const [searchedsamurais, setSearchedsamurais] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  // create state to hold saved samuraiId values
  const [savedsamuraiIds, setSavedsamuraiIds] = useState(getSavedsamuraiIds());

  const [savesamurai, { error }] = useMutation(SAVE_SAMURAI);

  // set up useEffect hook to save `savedsamuraiIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => savesamuraiIds(savedsamuraiIds);
  });

  // create method to search for samurais and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchGooglesamurais(searchInput);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { items } = await response.json();

      const samuraiData = items.map((samurai) => ({
        samuraiId: samurai.id,
        authors: samurai.volumeInfo.authors || ["No author to display"],
        title: samurai.volumeInfo.title,
        description: samurai.volumeInfo.description,
        image: samurai.volumeInfo.imageLinks?.thumbnail || "",
        link: samurai.volumeInfo.infoLink || "",
      }));

      setSearchedsamurais(samuraiData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };


  const handleSavesamurai = async (samuraiId) => {
   
    const samuraiToSave = searchedsamurais.find((samurai) => samurai.samuraiId === samuraiId);

   
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await savesamurai({ variables: { input: samuraiToSave } });

    
      setSavedsamuraiIds([...savedsamuraiIds, samuraiToSave.samuraiId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Search for samurais!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a samurai"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedsamurais.length
            ? `Viewing ${searchedsamurais.length} results:`
            : "Search for a samurai to begin"}
        </h2>
        <CardColumns>
          {searchedsamurais.map((samurai) => {
            return (
              <Card key={samurai.samuraiId} border="dark">
                {samurai.image ? (
                  <Card.Img
                    src={samurai.image}
                    alt={`The cover for ${samurai.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{samurai.title}</Card.Title>
                  <p className="small">Authors: {samurai.authors}</p>
                  <Card.Text>{samurai.description}</Card.Text>
                  {samurai.link && (
                    <Card.Text>
                      <a
                        href={samurai.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check It Out!
                      </a>
                    </Card.Text>
                  )}
                  {error && <div>Something went wrong...</div>}
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedsamuraiIds?.some(
                        (savedsamuraiId) => savedsamuraiId === samurai.samuraiId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSavesamurai(samurai.samuraiId)}
                    >
                      {savedsamuraiIds?.some(
                        (savedsamuraiId) => savedsamuraiId === samurai.samuraiId
                      )
                        ? "This samurai has already been saved!"
                        : "Save this samurai!"}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default Searchsamurais;