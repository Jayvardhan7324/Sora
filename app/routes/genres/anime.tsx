import { Button, Spacer } from '@nextui-org/react';
import { useNavigate } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

import { animeGenres } from '~/constants/filterItems';
import { H4 } from '~/components/styles/Text.styles';

const AnimeGenresPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('genres');
  return (
    <div className="px-4">
      <H4>{t('anime-genres')}</H4>
      <Spacer y={1} />
      <div className="grid grid-cols-1 justify-center gap-3 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {animeGenres.map((genre) => (
          <Button
            key={genre}
            type="button"
            flat
            auto
            onPress={() => navigate(`/discover/anime?genres=${genre}`)}
          >
            {genre}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AnimeGenresPage;
