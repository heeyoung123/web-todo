import {HomeContainer} from "../../shared/container.ts";
import * as S from "./home.style.ts";
import {Button} from "../../component/button.tsx";
import {Input} from "../../component/input.tsx";
import {Done} from "../../component/done.tsx";
import {Todo} from "../../component/todo.tsx";
import {useTodoController} from "../../controller/todoControllers";
import {useState} from "react";
import {useOpenModal} from "../../hooks/useModal";
import {CreateTeamModal, InviteModal, OptionTeamModal} from "../../component/modal";
import {useTeamController} from "../../controller/teamController";
import MoreDot from "../../assets/moreDot.svg?react";

const Home = () => {
	const {
		todos,
		done,
		modifyId,
		update,
		setUpdate,
		handleModify,
		handleUpdate,
		handleCancel,
		handleDelete,
		handleComplete,
		handlePost,
		handleDeleteDone,
	} = useTodoController();

	const {
		teams,
		teamName,
		setTeamName,
		handleCreateTeam,
		handleDeleteTeam,
		handleAddMember,
		newMember,
		setNewMember,
	} = useTeamController([]);

	const [newTodo, setNewTodo] = useState("");
	const handleAddTodo = () => {
		handlePost(newTodo);
		setNewTodo("");
	};

	const [openTeamId, setOpenTeamId] = useState<string | null>(null);
	const createTeamModal = useOpenModal();

	const toggleModal = (teamId: string) => setOpenTeamId(prev => (prev === teamId ? null : teamId));

	const inviteModal = useOpenModal();
	const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);

	const handleOpenInviteModal = (teamId: string) => {
		setSelectedTeamId(teamId);
		inviteModal.clickModal();
	};


	return (
		<HomeContainer>
			<S.NavContainer>
				<S.SidBarWrapper>
					<S.SideBar>할 일 목록</S.SideBar>
					{teams.map((team) => (
						<S.SideBar key={team.id}>
							{team.name}
							<MoreDot onClick={() => toggleModal(team.id)}/>
							{openTeamId === team.id && (
								<OptionTeamModal
									closeModal={() => setOpenTeamId(null)}
									handleOpenInviteModal={() => handleOpenInviteModal(team.id)}
									handleDeleteTeam={() => {
										handleDeleteTeam(team.id);
										setOpenTeamId(null);
									}}
								/>
							)}
						</S.SideBar>
					))}
					<Button text="팀 만들기" onClick={createTeamModal.clickModal} width="15rem" height="2.5rem"/>
					{createTeamModal.isOpenModal && (
						<CreateTeamModal closeModal={createTeamModal.closeModal} teamName={teamName} setTeamName={setTeamName}
						                 handleCreateTeam={() => handleCreateTeam(createTeamModal.closeModal)}/>
					)}
				</S.SidBarWrapper>
				<S.Line/>
			</S.NavContainer>
			{inviteModal.isOpenModal && selectedTeamId && (
				<InviteModal
					closeModal={inviteModal.closeModal}
					handleAddMember={(member) => handleAddMember(selectedTeamId, member)}
					member={newMember}
					setMember={setNewMember}
				/>
			)}


			<S.TodoWrapper>
				<S.TodoInput>
					<Input placeholder="데브코스 강의 수강하기" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
					<Button text={"등록하기"} onClick={handleAddTodo} buttonColor="black"/>
				</S.TodoInput>
				<Todo
					todos={todos}
					modifyId={modifyId}
					update={update}
					setUpdate={setUpdate}
					handleModify={handleModify}
					handleUpdate={handleUpdate}
					handleCancel={handleCancel}
					handleDelete={handleDelete}
					handleComplete={handleComplete}
				/>
				<Done done={done} handleDeleteDone={handleDeleteDone}/> {/* done 배열을 전달 */}
			</S.TodoWrapper>
		</HomeContainer>
	);
};

export default Home;