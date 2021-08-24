import { render, screen,userEvent } from "@testing-library/react";
import Header from "./Header";
import React from 'react';
import EmojiResultsRow from "./EmojiResultRow";
import App from "./App";





  describe ("Emoji Search", ()=> {

    beforeEach(()=> {
      render(<App />)
    })

    test("Header renders correctly ", () => {
      render(<Header />);
      
      const title  =screen.getByText(/Emoji Search/i);
      // i tagı ->büyük küçük harf ayırt etme anlamında 
      expect(title).toHaveTextContent("Emoji Search");
      expect(title).toBeInTheDocument();

      // aksi olursa toBeInTheDocument' dan önce not getir

    });

    test("Emoji List renders correctly ", () => {
      render(<EmojiResultsRow />);  

      const emojiList = screen.getAllByTestId("emojiRow");
      expect(emojiList.length).toEqual(20);
    });

    test("Filter test ", () => {
    const yazılan = screen.getByTest(/heart eyes/i) 
    const olmamalı = screen.getByText(/wink/i);
    userEvent.type(input, yazılan );
    expect(screen(olmamalı)).not.toBeInTheDocument;
    });
    // inputa heart eyes girildiğinde ekranda wink olmamalı

    test("should copy on click emoji" , ()=> {

      const row =screen.getAllByTestId("emojiRow");
      expect(copy).toHaveBeenCalled();
    })
  });
