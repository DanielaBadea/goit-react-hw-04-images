import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar/Searchbar";
import Button from "./ButtonLoadMore/Button";
import { config } from "data/config";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import Messaje from "./Messaje/Message";
import ScrollButton from "./ScrollButton/ScrollButton";

export function App() {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [isMesaje, setIsMesaje] = useState(true);
  const [isScroll, setIsScroll] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    if (searchPerformed) {
      const fetchGallery = async () => {
        const abortController = new AbortController();
        const { signal } = abortController;
        setIsLoading(true);

        try {
          const response = await fetch(`${config.URL}?q=${query}&page=${page}&key=${config.KEY}&image_type=photo&orientation=horizontal&per_page=12`, { signal });
          const data = await response.json();
          setGallery(prevGallery => [...prevGallery, ...data.hits]);
          setIsLoading(false);
          setIsScroll(true);
        } catch (error) {
          console.error('Error fetching gallery:', error);
          setIsLoading(false);
        } finally {
          console.log('Fetching gallery completed');
        }
      };

      fetchGallery();

      return () => {
        const abortController = new AbortController();
        abortController.abort();
      };
    }
  }, [query, page, searchPerformed]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const newQuery = ev.target.elements.query.value;

    if (newQuery.toLowerCase().trim() !== "") {
      setQuery(newQuery);
      setPage(1);
      setGallery([]);
      setIsMesaje(false);
      setSearchPerformed(true);
    }

    ev.target.reset();
  };

  const handlerLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (image) => {
    setIsOpenModal(true);
    setModalImage(image.largeImageURL);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalImage('');
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} value={query} />
      {isMesaje && <Messaje />}
      {searchPerformed && (
        <>
          {isLoading ? <Loader /> : <ImageGallery images={gallery} openModal={openModal} />}
          {gallery.length > 0 && !isLoading && <Button onLoadMore={handlerLoadMore} />}
          {isOpenModal && <Modal closeModal={closeModal} image={modalImage} />}
          {isScroll && <ScrollButton />}
        </>
      )}
    </>
  );
};
