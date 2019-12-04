import React from 'react'

import Footer from '../Footer';
import { InputIconWeak }    from '../../components/Input';
import searchIcon           from '../../assets/icons/search.svg'

import { 
    StoriesWrapper,
    StoriesHeader,
    StoriesHeaderText,
    StoriesHeaderTitle,
    StoriesHeaderSubTitle,
    StoriesBody,
    ListStories,
    RightMenu,
    MenuCard,
    MenuCardTitle,
    SearchResult,
    BestStories,
    StorieCard,
    StorieCardImage,
    StorieCardTitle
} from './style';

const Stories = () => {
    return (
        <>
            <StoriesWrapper>
                <StoriesHeader>
                    <StoriesHeaderText>
                        <StoriesHeaderTitle>
                            Carreiras FMON
                        </StoriesHeaderTitle>
                        <StoriesHeaderSubTitle>
                            Acompanhe ou conte as melhores carreiras aqui!
                        </StoriesHeaderSubTitle>
                    </StoriesHeaderText>
                </StoriesHeader>
                <StoriesBody>
                    <ListStories>
                        <BestStories>
                            <StorieCard className="small">
                                <StorieCardImage Image="https://www.fmanager.com.br/applications/core/interface/imageproxy/imageproxy.php?img=https://lh3.googleusercontent.com/SOpL3jGxFY1F4He4ebWZWaksM_u5_TbZ9081whJVHzVWLalOIaj6NXzivQ3JyCNc3AAcwm-AStzYYMn_36zbZhRkPtEKRxTMfDoMH_a1wV2OpO8JSloG_EymGXW6LMOdnQtBk3WsEHTVQ5aYH6xFl-ruOJCNd88P8zHjULuf-ZiD5jqV2EYq1o491pYbkfAoRMhOD8zYHwCtPCujqD-DF8LWt4G1jHhKkUDY3_aTfQiI5pulrURuJKLfSe2mvhjqt8JmjN_W9oxtjzFg7kR6MJdeKs3oMi_lreC7TS5GcQ5LyrRUKkYoT-YtXxNZUWv92yB2tX2vV8qISqXI8Ti2imQTw5tPn3JEyw4DD1dIGdW0ehmsGi7Q8tQSFvOM8SYBBCNqVGAPIELW_K1LUMheeAXMhLmf5PSO28w0rTWhtiC7fayhEZEiX82fDuq0eWlsc-Bld4o2vTTUIMaDTw95CW_jqOPNz8DglFZvEZnn_vNOvrKkDEDpwsKx78e3TXzot_zXVjDl7Ri2LbWDLpmS0vbV1SEKYfoyGIChDwPLV454N-aqiWw-8LJYoeVcn_a-SYEo79ARv9ElEH3hidafbDONJHd14DzCVHMflM8XqlmTZ0rrguBuibAGAVS0MOaqEScasA242p9pcFTffW9x2MWsq1tBF80=w800-h300-no&key=44d39a87840ac7c01750a8d550d727f3deb6c25b0b3b85bc835057fff5b17c9f" />
                                <StorieCardTitle>África, o berço da bola</StorieCardTitle>
                            </StorieCard>
                            <StorieCard className="small">
                                <StorieCardImage Image="https://www.fmanager.com.br/applications/core/interface/imageproxy/imageproxy.php?img=https://lh3.googleusercontent.com/SOpL3jGxFY1F4He4ebWZWaksM_u5_TbZ9081whJVHzVWLalOIaj6NXzivQ3JyCNc3AAcwm-AStzYYMn_36zbZhRkPtEKRxTMfDoMH_a1wV2OpO8JSloG_EymGXW6LMOdnQtBk3WsEHTVQ5aYH6xFl-ruOJCNd88P8zHjULuf-ZiD5jqV2EYq1o491pYbkfAoRMhOD8zYHwCtPCujqD-DF8LWt4G1jHhKkUDY3_aTfQiI5pulrURuJKLfSe2mvhjqt8JmjN_W9oxtjzFg7kR6MJdeKs3oMi_lreC7TS5GcQ5LyrRUKkYoT-YtXxNZUWv92yB2tX2vV8qISqXI8Ti2imQTw5tPn3JEyw4DD1dIGdW0ehmsGi7Q8tQSFvOM8SYBBCNqVGAPIELW_K1LUMheeAXMhLmf5PSO28w0rTWhtiC7fayhEZEiX82fDuq0eWlsc-Bld4o2vTTUIMaDTw95CW_jqOPNz8DglFZvEZnn_vNOvrKkDEDpwsKx78e3TXzot_zXVjDl7Ri2LbWDLpmS0vbV1SEKYfoyGIChDwPLV454N-aqiWw-8LJYoeVcn_a-SYEo79ARv9ElEH3hidafbDONJHd14DzCVHMflM8XqlmTZ0rrguBuibAGAVS0MOaqEScasA242p9pcFTffW9x2MWsq1tBF80=w800-h300-no&key=44d39a87840ac7c01750a8d550d727f3deb6c25b0b3b85bc835057fff5b17c9f" />
                                <StorieCardTitle>África, o berço da bola</StorieCardTitle>
                            </StorieCard>
                            <StorieCard className="small">
                                <StorieCardImage Image="https://www.fmanager.com.br/applications/core/interface/imageproxy/imageproxy.php?img=https://lh3.googleusercontent.com/SOpL3jGxFY1F4He4ebWZWaksM_u5_TbZ9081whJVHzVWLalOIaj6NXzivQ3JyCNc3AAcwm-AStzYYMn_36zbZhRkPtEKRxTMfDoMH_a1wV2OpO8JSloG_EymGXW6LMOdnQtBk3WsEHTVQ5aYH6xFl-ruOJCNd88P8zHjULuf-ZiD5jqV2EYq1o491pYbkfAoRMhOD8zYHwCtPCujqD-DF8LWt4G1jHhKkUDY3_aTfQiI5pulrURuJKLfSe2mvhjqt8JmjN_W9oxtjzFg7kR6MJdeKs3oMi_lreC7TS5GcQ5LyrRUKkYoT-YtXxNZUWv92yB2tX2vV8qISqXI8Ti2imQTw5tPn3JEyw4DD1dIGdW0ehmsGi7Q8tQSFvOM8SYBBCNqVGAPIELW_K1LUMheeAXMhLmf5PSO28w0rTWhtiC7fayhEZEiX82fDuq0eWlsc-Bld4o2vTTUIMaDTw95CW_jqOPNz8DglFZvEZnn_vNOvrKkDEDpwsKx78e3TXzot_zXVjDl7Ri2LbWDLpmS0vbV1SEKYfoyGIChDwPLV454N-aqiWw-8LJYoeVcn_a-SYEo79ARv9ElEH3hidafbDONJHd14DzCVHMflM8XqlmTZ0rrguBuibAGAVS0MOaqEScasA242p9pcFTffW9x2MWsq1tBF80=w800-h300-no&key=44d39a87840ac7c01750a8d550d727f3deb6c25b0b3b85bc835057fff5b17c9f" />
                                <StorieCardTitle>África, o berço da bola</StorieCardTitle>
                            </StorieCard>
                        </BestStories>
                    </ListStories>
                    <RightMenu>
                        <MenuCard>
                            <MenuCardTitle>PESQUISA</MenuCardTitle>
                            <InputIconWeak 
                                placeholder="Pesquisar..." 
                                icon={searchIcon} 
                            />
                            <SearchResult>
                            </SearchResult>
                        </MenuCard>
                    </RightMenu>
                </StoriesBody>
            </StoriesWrapper>
            <Footer />
        </>
    )
}

export default Stories;
