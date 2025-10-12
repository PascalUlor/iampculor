import React from "react";
import styled from "styled-components";
import {
  tabletMaxWidth,
  mobileMaxWidth,
  largeWidth,
  extraLargeWidth
} from "../../~reusables/variables";

const CardItem = ({ image, title, details, shortdeet, techlist, path }) => {
  // Helper to detect video/embed URLs
  const isLoom = (url) => typeof url === 'string' && url.includes('loom.com');
  const isYouTube = (url) => typeof url === 'string' && (url.includes('youtube.com') || url.includes('youtu.be'));
  const isVideoFile = (url) => typeof url === 'string' && url.match(/\.(mp4|webm|ogg)(\?|$)/i);

  const renderMedia = () => {
    // Prefer explicit path for embeddable links, otherwise fall back to image
    const mediaUrl = image;
    if (!mediaUrl) return null;

    if (isLoom(mediaUrl)) {
      // Loom embed: convert to embed URL if possible
      // Loom embed format: https://www.loom.com/embed/<id>
      // If user supplied a share URL (https://www.loom.com/share/<id>), change to /embed/
      const embedUrl = mediaUrl.includes('/share/')
        ? mediaUrl.replace('/share/', '/embed/')
        : mediaUrl.includes('/embed/')
        ? mediaUrl
        : mediaUrl;
      return (
        <EmbedWrapper>
          <iframe
            title={title || 'loom-video'}
            src={embedUrl}
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          />
        </EmbedWrapper>
      );
    }

    if (isYouTube(mediaUrl)) {
      // Normalize YouTube urls to embed form
      let videoId = null;
      try {
        if (mediaUrl.includes('youtu.be/')) {
          videoId = mediaUrl.split('youtu.be/')[1].split(/[?&]/)[0];
        } else {
          const u = new URL(mediaUrl);
          videoId = u.searchParams.get('v');
        }
      } catch (e) {
        videoId = null;
      }
      const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : mediaUrl;
      return (
        <EmbedWrapper>
          <iframe
            title={title || 'youtube-video'}
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </EmbedWrapper>
      );
    }

    if (isVideoFile(mediaUrl)) {
      return (
        <VideoWrapper>
          <video controls>
            <source src={mediaUrl} />
            Your browser does not support the video tag.
          </video>
        </VideoWrapper>
      );
    }

    // Fallback to image. If path provided wrap it in anchor
    return (
      <>
        {path ? (
          <a href={path}>
            <img src={image} alt={title || ''} />
          </a>
        ) : (
          <img src={image} alt={title || ''} />
        )}
      </>
    );
  };

  return (
    <Card>
      {/* <span className="date">{date}</span> */}
      <Content>
        <Description>
          <StyledDetails>
            <ProjectTitle>{title}</ProjectTitle>
            <br />
            {details}
            <br />
            <br />
            <ShortDeet>{shortdeet}</ShortDeet>
            {techlist && (
              <DetailedList>
                {techlist.map((tech, i) => {
                  return (
                    <ListItem key={i}>
                      <a href={tech.link}>{tech.name}</a>
                    </ListItem>
                  );
                })}
              </DetailedList>
            )}
          </StyledDetails>
        </Description>
        <Demo>{renderMedia()}</Demo>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  
  width: 100%;
  max-height: 300px;
  span.date {
    position: relative;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1200px) {
    margin-bottom: 15rem;
  }

  @media (max-width: ${tabletMaxWidth}) {
    margin: 2rem auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    margin: 2rem auto;
  }
`;

const Content = styled.div`
  display: flex;
  padding: 0;
  @media (max-width: ${tabletMaxWidth}) {
    flex-direction: column;
    width: 100%;
    margin: 2rem auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    flex-direction: column;
    width: 100%;
    margin: 2rem auto;
  }
`;

const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  @media (max-width: ${tabletMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }
`;

const StyledDetails = styled.div`
  padding: 5px;
`;

const ShortDeet = styled.strong`
  font-style: italic;
  font-weight: 500;
  text-transform: uppercase;
`;

const ProjectTitle = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 1;
  margin-bottom: 0.3em;
  -webkit-font-smoothing: antialiased;
`;

const Demo = styled.div`
  padding: 5px;
  width: 50%;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${largeWidth}) {
    width: 100%;
    margin-top: 2rem;
  }
  @media (max-width: ${tabletMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }

  @media (max-width: ${mobileMaxWidth}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 3px;
    margin: 0 auto;
  }
  @media (min-width: ${extraLargeWidth}) {
    width: 50%;
  }
`;

const EmbedWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  video {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const DetailedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: disc;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0;
  padding-left: 1rem;
  position: relative;
  overflow: hidden;
  font-weight: 500;
  a {
    display: inline-block;
    /* background-color: rgba(175, 34, 34, 0.8); */
    background-color: rgba(0, 0, 0, 0.3);
    color: #000;
    padding: 4px 10px;
    font-size: 13px;
    text-transform: uppercase;
  }
`;
export default CardItem;
