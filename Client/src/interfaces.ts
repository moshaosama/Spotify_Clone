export interface albumData {
  album: {
    album_type: string;
    Artists: ArtistData[];
    External_urls: {
      spotify: string;
    };
    Href: string;
    Id: string;
    Images: [
      {
        url: string;
        height: number;
        weight: number;
      }
    ];
    Is_playable: boolean;
    Name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    Type: string;
    Uri: string;
  };
  artists: ArtistData[];

  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
[];

export interface Album {
  data: {
    data: {
      tracks: albumData[];
    }[];
  }[];
}
export interface ArtistData {
  data: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    genres: [];
    href: string;
    id: string;
    images: [
      {
        url: string;
        height: number;
        weight: number;
      }
    ];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  }[];
}
export interface artistDATA {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: [];
  href: string;
  id: string;
  images: [
    {
      url: string;
      height: number;
      weight: number;
    }
  ];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Artist {
  statusbare: string;
  data: ArtistData[];
}
