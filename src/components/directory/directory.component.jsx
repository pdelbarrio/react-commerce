import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
        // {
        //   title: "Prank Gifts",
        //   imageUrl:
        //     "https://1.bp.blogspot.com/-DtvfC8xpUp0/XeIfKQfg1eI/AAAAAAAAAVs/J6C_99yybsclj9u02sAkatWO_aY0232ZgCLcBGAsYHQ/s1600/2hbjkmnn2%2B20191126_1217512%2B%2528Large%2529.jpg",
        //   id: 1,
        // },
        // {
        //   title: "Coding Memes",
        //   imageUrl:
        //     "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bf3a2121cc74f72a286_0AEnnZYBAYzmSXzyGaopjvEGKKO1yFqf_zMXqFTAT6vUDfXVPRifI3J8oBjZUl51PnRQqf2tqpjiRt33IKgg4sTiJi2YShGTN5iNUIoYbNj2HXobiQg4-k7yBiNT54EKOGYyZOR2.pngNopueodr",
        //   id: 2,
        // },
        // {
        //   title: "Conspiracy Theories",
        //   imageUrl:
        //     "https://around.uoregon.edu/sites/around2.uoregon.edu/files/field/image/conspiracy_shutterstock.jpg",
        //   id: 3,
        // },
        // {
        //   title: "Men",
        //   imageUrl:
        //     "https://itsastampede615821596.files.wordpress.com/2020/03/the-naked-gun-quotes.jpg",
        //   id: 4,
        // },
        // {
        //   title: "Women",
        //   imageUrl:
        //     "https://i1.wp.com/film-cred.com/wp-content/uploads/2020/10/c7eb0da6711b360fccc0b4b7d8c49293.jpg",
        //   id: 5,
        // },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
