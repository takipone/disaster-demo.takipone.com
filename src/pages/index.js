import React, { useState, useRef } from 'react';
import Head from 'next/head';

import { Container, Box } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Title } from "../components/title"; 
import { KoedoButton } from "../components/button"; 
import { TravelNoteList } from "../components/travelnotelist"; 
import { TravelNoteForm } from "../components/travelnoteform";

export default function Home() {
  const [travelNoteList, setTravelNoteList] = useState([
    {
      author: "飯田武",
      nickname: "takeshi22",
      date: "2021/12/10 16:30",
      title: "時の鐘よかった！",
      description: "さほど混んでおらず、ゆったり見れました",
      certified: true
    },
    {
      author: "岡田香織",
      nickname: "okada",
      date: "2021/12/12 17:30",
      title: "ワーケーション施設もあるとなおよい",
      description: "テレカンできる場所が欲しい",
      certified: false
    },
  ]);
  const nameElement = useRef(null);
  const snsElement = useRef(null);
  const titleElement = useRef(null);
  const descriptionElement = useRef(null);
  const handleAddCertifiedTravelNote = () => {
    fetch('https://koedo.cod.coralrf.app/api/voice', {
      method: 'POST',
      body: "{'message':'test'}"
    })
    .then(res => {
      if(res.ok) setEnableButton(true);
      setTravelNoteList([...travelNoteList,{
        author: nameElement.current.value,
        nickname: snsElement.current.value,
        date: Date.now(),
        title: titleElement.current.value,
        description: descriptionElement.current.value,
        certified: true
      }]);
      })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  const handleAddTravelNote = () => {
    setTravelNoteList([...travelNoteList,{
      author: nameElement.current.value,
      nickname: snsElement.current.value,
      date: Date.now(),
      title: titleElement.current.value,
      description: descriptionElement.current.value,
      certified: false
    }]);
  };

  return (
    <>
      <Head>
        <title>観光地ナビ</title>
        <meta name="description" content="sample page for sightseeing guide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title
        icon={<InfoIcon />}
        title="観光地ナビ"
        as="h1"
        fontSize={{ base: "2xl", md: "3xl"}}
        mt="2"
        mb="4"
      />
      <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
        <KoedoButton label="みどころ案内" bgImage="/midokoro_bg.jpg" />
        <KoedoButton label="アクセス" bgImage="/access_bg.jpg" />
        <TravelNoteList travelNoteList={travelNoteList}/>
        <TravelNoteForm
          nameElement={nameElement}
          snsElement={snsElement}
          titleElement={titleElement}
          descriptionElement={descriptionElement}
          handleAddCertifiedTravelNote={handleAddCertifiedTravelNote}
          handleAddTravelNote={handleAddTravelNote}
        />
      </Container>
    </>
  )
}
