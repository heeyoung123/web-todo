import {useState} from "react";

interface Team {
	id: number;
	name: string;
	members: string[];
}


export const useTeamController = (initialTeams: Team[] = []) => {
	const [teams, setTeams] = useState<Team[]>(initialTeams);
	const [teamName, setTeamName] = useState("");
	const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
	const [newMember, setNewMember] = useState("");

	// 팀 생성 함수
	const handleCreateTeam = (closeModal: () => void) => {
		if (!teamName.trim()) return;
		setTeams([...teams, {id: teams.length + 1, name: teamName, members: []}]);
		setTeamName("");
		closeModal();
	};

	// 팀 선택 함수
	const selectTeam = (team: Team) => {
		setSelectedTeam(team);
	};

	// 팀원 추가 함수
	const handleAddMember = (teamId: string, userId: string) => {
		if (!userId.trim()) return;
		setTeams(teams.map(team =>
			team.id === Number(teamId) ? {...team, members: [...team.members, userId]} : team,
		));
	};

	// 팀 삭제 함수
	const handleDeleteTeam = (id: number) => {
		setTeams(teams.filter((team) => team.id !== id));
	};

	return {
		teams,
		teamName,
		setTeamName,
		handleCreateTeam,
		selectTeam,
		selectedTeam,
		handleDeleteTeam,
		newMember,
		setNewMember,
		handleAddMember,
	};
};