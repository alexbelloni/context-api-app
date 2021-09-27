import React from 'react';
import { useStateValue } from '../../state';
import {
  Container,
  //   Badge,
  //   Distance,
  //   Footer,
     Header,
     Name,
     Email,
 Content,
} from './styles';
import Avatar from '../Avatar';

const Card = ({ user }) => {

  const [state, dispatch] = useStateValue();

  /**
   * Handle hover over the card. the new map regiion is the
   * center position and if this happens the center gets highlighted
   */
  // function handleHover(posto) {
  //   dispatch(
  //     setMapRegion({
  //       latitude: posto.latitude,
  //       longitude: posto.longitude,
  //     })
  //   );
  // }

  return (
    <Container className="card">
     <Header>
      <Avatar user={user} size={300} />
        <Name>{user.name}</Name>
  <Email>{user.email}</Email> 
      </Header>
      <Content>
      <p>{user.company.name}</p>
      </Content>

    </Container>
  )

  //   return (
  //     <Container
  //       onMouseEnter={() => handleHover(posto)}
  //       selected={
  //         state.region.latitude === posto.latitude &&
  //         state.region.longitude === posto.longitude
  //       }
  //       onClick={onClick}
  //       className="container-card"
  //     >
  //       <Header>
  //         <TitleLine>
  //           <ModalTitle>
  //             {posto.center_type === 'O' ? (
  //               <CrossRoundIcon
  //                 color={
  //                   posto.points_color === 'GREEN'
  //                     ? theme.colors.green
  //                     : posto.points_color === 'YELLOW'
  //                       ? theme.colors.yellow
  //                       : theme.colors.red
  //                 }
  //               />
  //             ) : (
  //               <CrowdRoundIcon
  //                 color={
  //                   posto.points_color === 'GREEN'
  //                     ? theme.colors.green
  //                     : posto.points_color === 'YELLOW'
  //                       ? theme.colors.yellow
  //                       : theme.colors.red
  //                 }
  //               />
  //             )}
  //             <span>{posto.center_name}</span>
  //           </ModalTitle>

  //           {posto.points_color === 'GREEN' ? (
  //             <Badge color={theme.colors.green}>
  //               <SyringeIcon color="#FFF" />
  //             </Badge>
  //           ) : posto.points_color === 'RED' ? (
  //             <Badge color={theme.colors.red}>
  //               <SyringeNotIcon color="#FFF" />
  //             </Badge>
  //           ) : (
  //             <Badge color={theme.colors.yellow}>
  //               <SyringeIcon color="#FFF" />
  //             </Badge>
  //           )}
  //         </TitleLine>
  //       </Header>

  //       <ShareArea onClick={e => { e.stopPropagation(); }}>
  //         <WhatsappShareButton
  //           key="li"
  //           className="btn"
  //           url={`${posto.center_name} 📍 ${posto.center_district} | ${posto.center_city} - ${posto.center_uf} https://ondetemvacina.com`}
  //         >
  //           <WhatsappIcon round size={32} />
  //         </WhatsappShareButton>
  //       </ShareArea>

  //       <AddressStatus>
  //         <Address>
  //           <span className="points-name">
  //             {posto.center_district} | {posto.center_city} - {posto.center_uf}
  //           </span>
  //         </Address>
  //       </AddressStatus>

  //       <div className="points-block" style={{ flex: 1 }}>
  //         {posto.points_color === 'GREEN' && (
  //           <PeopleConfirmed color={posto.points_color}>
  //             <span>{posto.points_message}</span>
  //           </PeopleConfirmed>
  //         )}

  //         {posto.points_color === 'RED' && (
  //           <PeopleConfirmed color={posto.points_color}>
  //             <span>{posto.points_message}</span>
  //           </PeopleConfirmed>
  //         )}
  //         {posto.points_color === 'YELLOW' && (
  //           <PeopleConfirmed color={posto.points_color}>
  //             <span>{posto.points_message}</span>
  //           </PeopleConfirmed>
  //         )}
  //       </div>

  //       <Footer className="card-footer">
  //         <Vaccinated className="card-vaccinated">
  //           {posto.center_type === 'O' && (
  //             <>
  //               <VaccinatedIcon color={theme.colors.icons} />
  //               <span>
  //                 {formattedNumber(posto.center_total_vaccines)} vacinas aplicadas
  //               </span>
  //             </>
  //           )}
  //         </Vaccinated>
  //         <Distance className="card-distance">
  //           <DistanceIcon color={theme.colors.icons} />
  //           <span> {posto.center_distance_km} km</span>
  //         </Distance>
  //       </Footer>
  //     </Container>
  //   );
};

export default Card;
