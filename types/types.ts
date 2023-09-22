export type heroDataType = {
  data: {
    postCollection: {
      items: [
        {
          author: {
            name: string;
            picture: {
              url: string;
            };
          };
          date: string;
          images: {
            url: string;
          };
          text: undefined;
          title: string;
        }
      ];
    };
  };
};

export type articleDataType = {
  data: {
    articolListCollection: {
      items: {
        title: string;
        paragraph: string;
        image: {
          url: string;
        };
        articlesCollection: {
          items: {
            tItle: string;
            text: string;
            image: {
              url: string;
            };
          }[];
        };
        postsCollection: {
          items: {
            title: string;
            text: string;
            id: string;
            author: {
              name: string;
              picture: {
                url: string;
              };
            };
            date: string;
            images: {
              url: string;
            }[];
          }[];
        };
      }[];
    };
  };
};

export type PageData = {
  dataFromApi: {
    data: {
      pageCollection: {
        items: {
          image: {
            url: string;
          }
          paragraph:string
          articlesCollection: {
            items: {
              tItle: string;
              text: string;
              image: {
                url: string;
              };
            }[];
          };
          postsCollection: {
            items: {
              title: string;
              text: string | null;
              date: string;
              id: string;
              images: {
                url: string;
              };
              author: {
                name: string;
                picture: {
                  url: string;
                };
              };
            }[];
          };
        }[];
      };
    };
  };
};

export type SectionData = {
  items: {
    image: {
      url: string;
    }
    paragraph:string
    articlesCollection: {
      items: {
        tItle: string;
        text: string;
        image: {
          url: string;
        };
      }[];
    };
    postsCollection: {
      items: {
        title: string;
        text: string | null;
        date: string;
        id: string;
        images: {
          url: string;
        };
        author: {
          name: string;
          picture: {
            url: string;
          };
        };
      }[];
    };
  }[];
}

export const 
