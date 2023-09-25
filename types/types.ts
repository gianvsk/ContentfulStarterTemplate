export type PageData = {
  dataFromApi: {
    data: {
      pageCollection: {
        items: {
          image: {
            url: string;
          };
          paragraph: string;
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

export type heroPostData = {
  postData: {
    data: {
      postCollection: {
        items: [
          {
            title: string;
            images: {
              url: string;
            };
            author: {
              name: string;
              picture: {
                url: string;
              };
            };
            text: string | null;
            date: string;
            id: string;
          }
        ];
      };
    };
  };
  dataHero: {
    data: {
      postCollection: {
        items: [
          {
            title: string;
            images: {
              url: string;
            };
            author: {
              name: string;
              picture: {
                url: string;
              };
            };
            text: string | null;
            date: string;
            id: string;
          }
        ];
      };
    };
  };
};
