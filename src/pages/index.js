import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

import { Container, SimpleGrid } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { Title } from "../components/title"; 
import { BulletinButton } from "../components/button"; 
import { MessageList } from "../components/messagelist"; 
import { MessageForm } from "../components/messageform";

export default function Home() {
  const [messageList, setMessageList] = useState([]);

  const nameElement = useRef(null);
  const snsElement = useRef(null);
  const titleElement = useRef(null);
  const descriptionElement = useRef(null);
  const handleAddMessage = async () => {
    await fetch('/api/message', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        date:   new Date().toString(),
        author: nameElement.current.value,
        title:  titleElement.current.value,
        description: descriptionElement.current.value,
      })
    })
    .then(res => res.json())
    .then(data => {
      setMessageList(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  useEffect(async () => {
    await fetch('/api/message')
    .then(res => res.json())
    .then(data => {
      setMessageList(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  },[]);

  return (
    <>
      <Head>
        <title>災害用伝言版</title>
        <meta name="description" content="sample page for sightseeing guide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title
        icon={<ChatIcon />}
        title="災害用伝言版"
        as="h1"
        fontSize={{ base: "2xl", md: "3xl"}}
        mt="2"
        mb="4"
      />
      <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
        <SimpleGrid columns={2} spacing={4}>
          <BulletinButton label="登録" />
          <BulletinButton label="確認" />
        </SimpleGrid>
        <MessageList messageList={messageList} />
        <MessageForm
          nameElement={nameElement}
          snsElement={snsElement}
          titleElement={titleElement}
          descriptionElement={descriptionElement}
          handleAddMessage={handleAddMessage}
        />
      </Container>
    </>
  )
}
