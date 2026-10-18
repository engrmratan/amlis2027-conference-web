import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ConferenceConfig,
  ImportantDateItem,
  ResearchTrackItem,
  CommitteeMemberItem,
  AwardItem,
  AcceptedPaperItem,
  SponsorItem,
  RegistrationTierItem,
  ProgramSessionItem,
  ContactMessageItem
} from '../types/conference';
import {
  INITIAL_CONFIG,
  INITIAL_TRACKS,
  INITIAL_DATES,
  INITIAL_COMMITTEE,
  INITIAL_AWARDS,
  INITIAL_PAPERS,
  INITIAL_SPONSORS,
  INITIAL_REGISTRATION_TIERS,
  INITIAL_PROGRAM
} from '../data/initialData';
import { sanitizeInput } from '../utils/security';

interface ConferenceContextType {
  config: ConferenceConfig;
  updateConfig: (newConfig: Partial<ConferenceConfig>) => void;
  tracks: ResearchTrackItem[];
  updateTrack: (track: ResearchTrackItem) => void;
  addTrack: (track: ResearchTrackItem) => void;
  deleteTrack: (id: string) => void;
  dates: ImportantDateItem[];
  updateDate: (date: ImportantDateItem) => void;
  addDate: (date: ImportantDateItem) => void;
  deleteDate: (id: string) => void;
  committee: CommitteeMemberItem[];
  updateCommitteeMember: (member: CommitteeMemberItem) => void;
  addCommitteeMember: (member: CommitteeMemberItem) => void;
  deleteCommitteeMember: (id: string) => void;
  awards: AwardItem[];
  updateAward: (award: AwardItem) => void;
  addAward: (award: AwardItem) => void;
  deleteAward: (id: string) => void;
  papers: AcceptedPaperItem[];
  updatePaper: (paper: AcceptedPaperItem) => void;
  addPaper: (paper: AcceptedPaperItem) => void;
  deletePaper: (id: string) => void;
  sponsors: SponsorItem[];
  updateSponsor: (sponsor: SponsorItem) => void;
  addSponsor: (sponsor: SponsorItem) => void;
  deleteSponsor: (id: string) => void;
  registrationTiers: RegistrationTierItem[];
  updateRegistrationTier: (tier: RegistrationTierItem) => void;
  programSessions: ProgramSessionItem[];
  updateProgramSession: (session: ProgramSessionItem) => void;
  addProgramSession: (session: ProgramSessionItem) => void;
  deleteProgramSession: (id: string) => void;
  messages: ContactMessageItem[];
  sendMessage: (name: string, email: string, category: string, subject: string, message: string) => Promise<boolean>;
  markMessageRead: (id: string) => void;
  deleteMessage: (id: string) => void;
  resetAllData: () => void;
  activeModal: 'template' | 'submissionPortal' | 'contactSuccess' | null;
  setActiveModal: (modal: 'template' | 'submissionPortal' | 'contactSuccess' | null) => void;
}

const ConferenceContext = createContext<ConferenceContextType | undefined>(undefined);

export const ConferenceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ConferenceConfig>(() => {
    try {
      const saved = localStorage.getItem('amlis_config');
      return saved ? { ...INITIAL_CONFIG, ...JSON.parse(saved) } : INITIAL_CONFIG;
    } catch {
      return INITIAL_CONFIG;
    }
  });

  const [tracks, setTracks] = useState<ResearchTrackItem[]>(() => {
    try {
      const saved = localStorage.getItem('amlis_tracks');
      return saved ? JSON.parse(saved) : INITIAL_TRACKS;
    } catch {
      return INITIAL_TRACKS;
    }
  });

  const [dates, setDates] = useState<ImportantDateItem[]>(() => {
    try {
      const saved = localStorage.getItem('amlis_dates');
      return saved ? JSON.parse(saved) : INITIAL_DATES;
    } catch {
      return INITIAL_DATES;
    }
  });

  const [committee, setCommittee] = useState<CommitteeMemberItem[]>(() => {
    try {
      const saved = localStorage.getItem('amlis_committee');
      return saved ? JSON.parse(saved) : INITIAL_COMMITTEE;
    } catch {
      return INITIAL_COMMITTEE;
    }
  });

  const [awards, setAwards] = useState<AwardItem[]>(() => {
    try {
      const saved = localStorage.getItem('amlis_awards');
      return saved ? JSON.parse(saved) : INITIAL_AWARDS;
    } catch {
      return INITIAL_AWARDS;
    }
  });

  const [papers, setPapers] = useState<AcceptedPaperItem[]>(() => {
    try {
      const saved = localStorage.getItem('amlis_papers');
      return saved ? JSON.parse(saved) : INITIAL_PAPERS;
    } catch {
      return INITIAL_PAPERS;
    }
  });

  const [sponsors, setSponsors] = useState<SponsorItem[]>(() => {
    try {
      const saved = localStorage.getItem('amlis_sponsors');
      return saved ? JSON.parse(saved) : INITIAL_SPONSORS;
    } catch {
      return INITIAL_SPONSORS;
    }
  });

  const [registrationTiers, setRegistrationTiers] = useState<RegistrationTierItem[]>(() => {
    try {
      const saved = localStorage.getItem('amlis_reg_tiers');
      return saved ? JSON.parse(saved) : INITIAL_REGISTRATION_TIERS;
    } catch {
      return INITIAL_REGISTRATION_TIERS;
    }
  });

  const [programSessions, setProgramSessions] = useState<ProgramSessionItem[]>(() => {
    try {
      const saved = localStorage.getItem('amlis_program');
      return saved ? JSON.parse(saved) : INITIAL_PROGRAM;
    } catch {
      return INITIAL_PROGRAM;
    }
  });

  const [messages, setMessages] = useState<ContactMessageItem[]>(() => {
    try {
      const saved = localStorage.getItem('amlis_messages');
      return saved ? JSON.parse(saved) : [
        {
          id: 'msg-demo-1',
          name: 'Dr. Robert Zhang',
          email: 'rzhang@cs.mit.edu',
          category: 'Paper Submission Enquiries',
          subject: 'Late Track Submission Inquiry for Generative AI Track',
          message: 'Dear Organizing Committee, could you confirm if the camera-ready deadline will be extended following the review notifications? Thank you.',
          createdAt: new Date().toISOString(),
          read: false
        }
      ];
    } catch {
      return [];
    }
  });

  const [activeModal, setActiveModal] = useState<'template' | 'submissionPortal' | 'contactSuccess' | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('amlis_config', JSON.stringify(config));
    } catch (e) {
      console.error(e);
    }
  }, [config]);

  useEffect(() => {
    try {
      localStorage.setItem('amlis_tracks', JSON.stringify(tracks));
    } catch (e) {
      console.error(e);
    }
  }, [tracks]);

  useEffect(() => {
    try {
      localStorage.setItem('amlis_dates', JSON.stringify(dates));
    } catch (e) {
      console.error(e);
    }
  }, [dates]);

  useEffect(() => {
    try {
      localStorage.setItem('amlis_committee', JSON.stringify(committee));
    } catch (e) {
      console.error(e);
    }
  }, [committee]);

  useEffect(() => {
    try {
      localStorage.setItem('amlis_awards', JSON.stringify(awards));
    } catch (e) {
      console.error(e);
    }
  }, [awards]);

  useEffect(() => {
    try {
      localStorage.setItem('amlis_papers', JSON.stringify(papers));
    } catch (e) {
      console.error(e);
    }
  }, [papers]);

  useEffect(() => {
    try {
      localStorage.setItem('amlis_sponsors', JSON.stringify(sponsors));
    } catch (e) {
      console.error(e);
    }
  }, [sponsors]);

  useEffect(() => {
    try {
      localStorage.setItem('amlis_reg_tiers', JSON.stringify(registrationTiers));
    } catch (e) {
      console.error(e);
    }
  }, [registrationTiers]);

  useEffect(() => {
    try {
      localStorage.setItem('amlis_program', JSON.stringify(programSessions));
    } catch (e) {
      console.error(e);
    }
  }, [programSessions]);

  useEffect(() => {
    try {
      localStorage.setItem('amlis_messages', JSON.stringify(messages));
    } catch (e) {
      console.error(e);
    }
  }, [messages]);

  const updateConfig = (newConfig: Partial<ConferenceConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const updateTrack = (track: ResearchTrackItem) => {
    setTracks(prev => prev.map(t => t.id === track.id ? track : t));
  };

  const addTrack = (track: ResearchTrackItem) => {
    setTracks(prev => [...prev, track]);
  };

  const deleteTrack = (id: string) => {
    setTracks(prev => prev.filter(t => t.id !== id));
  };

  const updateDate = (date: ImportantDateItem) => {
    setDates(prev => prev.map(d => d.id === date.id ? date : d));
  };

  const addDate = (date: ImportantDateItem) => {
    setDates(prev => [...prev, date]);
  };

  const deleteDate = (id: string) => {
    setDates(prev => prev.filter(d => d.id !== id));
  };

  const updateCommitteeMember = (member: CommitteeMemberItem) => {
    setCommittee(prev => prev.map(c => c.id === member.id ? member : c));
  };

  const addCommitteeMember = (member: CommitteeMemberItem) => {
    setCommittee(prev => [...prev, member]);
  };

  const deleteCommitteeMember = (id: string) => {
    setCommittee(prev => prev.filter(c => c.id !== id));
  };

  const updateAward = (award: AwardItem) => {
    setAwards(prev => prev.map(a => a.id === award.id ? award : a));
  };

  const addAward = (award: AwardItem) => {
    setAwards(prev => [...prev, award]);
  };

  const deleteAward = (id: string) => {
    setAwards(prev => prev.filter(a => a.id !== id));
  };

  const updatePaper = (paper: AcceptedPaperItem) => {
    setPapers(prev => prev.map(p => p.id === paper.id ? paper : p));
  };

  const addPaper = (paper: AcceptedPaperItem) => {
    setPapers(prev => [...prev, paper]);
  };

  const deletePaper = (id: string) => {
    setPapers(prev => prev.filter(p => p.id !== id));
  };

  const updateSponsor = (sponsor: SponsorItem) => {
    setSponsors(prev => prev.map(s => s.id === sponsor.id ? sponsor : s));
  };

  const addSponsor = (sponsor: SponsorItem) => {
    setSponsors(prev => [...prev, sponsor]);
  };

  const deleteSponsor = (id: string) => {
    setSponsors(prev => prev.filter(s => s.id !== id));
  };

  const updateRegistrationTier = (tier: RegistrationTierItem) => {
    setRegistrationTiers(prev => prev.map(r => r.id === tier.id ? tier : r));
  };

  const updateProgramSession = (session: ProgramSessionItem) => {
    setProgramSessions(prev => prev.map(s => s.id === session.id ? session : s));
  };

  const addProgramSession = (session: ProgramSessionItem) => {
    setProgramSessions(prev => [...prev, session]);
  };

  const deleteProgramSession = (id: string) => {
    setProgramSessions(prev => prev.filter(s => s.id !== id));
  };

  const sendMessage = async (
    name: string,
    email: string,
    category: string,
    subject: string,
    message: string
  ): Promise<boolean> => {
    const newMessage: ContactMessageItem = {
      id: `msg-${Date.now()}`,
      name: sanitizeInput(name, 100),
      email: sanitizeInput(email, 120),
      category: sanitizeInput(category, 80),
      subject: sanitizeInput(subject, 150),
      message: sanitizeInput(message, 5000),
      createdAt: new Date().toISOString(),
      read: false
    };
    setMessages(prev => [newMessage, ...prev]);
    return true;
  };

  const markMessageRead = (id: string) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, read: true } : m));
  };

  const deleteMessage = (id: string) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const resetAllData = () => {
    localStorage.removeItem('amlis_config');
    localStorage.removeItem('amlis_tracks');
    localStorage.removeItem('amlis_dates');
    localStorage.removeItem('amlis_committee');
    localStorage.removeItem('amlis_awards');
    localStorage.removeItem('amlis_papers');
    localStorage.removeItem('amlis_sponsors');
    localStorage.removeItem('amlis_reg_tiers');
    localStorage.removeItem('amlis_program');
    localStorage.removeItem('amlis_messages');
    setConfig(INITIAL_CONFIG);
    setTracks(INITIAL_TRACKS);
    setDates(INITIAL_DATES);
    setCommittee(INITIAL_COMMITTEE);
    setAwards(INITIAL_AWARDS);
    setPapers(INITIAL_PAPERS);
    setSponsors(INITIAL_SPONSORS);
    setRegistrationTiers(INITIAL_REGISTRATION_TIERS);
    setProgramSessions(INITIAL_PROGRAM);
  };

  return (
    <ConferenceContext.Provider
      value={{
        config,
        updateConfig,
        tracks,
        updateTrack,
        addTrack,
        deleteTrack,
        dates,
        updateDate,
        addDate,
        deleteDate,
        committee,
        updateCommitteeMember,
        addCommitteeMember,
        deleteCommitteeMember,
        awards,
        updateAward,
        addAward,
        deleteAward,
        papers,
        updatePaper,
        addPaper,
        deletePaper,
        sponsors,
        updateSponsor,
        addSponsor,
        deleteSponsor,
        registrationTiers,
        updateRegistrationTier,
        programSessions,
        updateProgramSession,
        addProgramSession,
        deleteProgramSession,
        messages,
        sendMessage,
        markMessageRead,
        deleteMessage,
        resetAllData,
        activeModal,
        setActiveModal
      }}
    >
      {children}
    </ConferenceContext.Provider>
  );
};

export const useConference = () => {
  const context = useContext(ConferenceContext);
  if (!context) {
    throw new Error('useConference must be used within a ConferenceProvider');
  }
  return context;
};
